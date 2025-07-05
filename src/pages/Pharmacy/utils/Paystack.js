// utils/Paystack.js
import { showError } from "@/utils/Toast";
import SuccessModal from "../components/SuccessModal";

export const loadPaystackScript = () => {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) return resolve();

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";

    script.onload = () => resolve();
    script.onerror = () => {
      reject("Paystack script failed to load");
    };
    document.body.appendChild(script);
  });
};

const generateReference = () => {
  return `REF_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
};

export const initiatePaystackPayment = async (setView, setCart) => {
  try {
    await loadPaystackScript();

    const deliveryInfo = JSON.parse(
      sessionStorage.getItem("deliveryForm") || "{}",
    );
    const cartSummary = JSON.parse(
      sessionStorage.getItem("cartSummary") || "{}",
    );

    if (!deliveryInfo.email || !cartSummary.total) {
      showError("Missing payment details.");
      return;
    }

    const reference = generateReference();

    const handler = window.PaystackPop.setup({
      key: "pk_test_7e7617d331bb61d153cacb5e7128f1a83e55071e",
      email: deliveryInfo.email,
      amount: Math.round(cartSummary.total * 100), // amount in kobo
      currency: "NGN",
      ref: reference,

      onClose: () => {
        showError("Payment was cancelled.");
      },

      callback: function (response) {
        (async () => {
          try {
            const res = await fetch("/api/payment/verification", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                reference: response.reference,
                deliveryInfo,
                cartSummary,
              }),
            });

            const result = await res.json();

            if (result.success) {
              SuccessModal.show();
              sessionStorage.clear();
              setCart({});
              setTimeout(() => setView("shop"), 1500);
            }else {
          showError(result.message || "Verification failed.");
            }
          } catch (error) {
            showError("Could not verify the payment");
          }
        })();
      },
    });

    handler.openIframe();
  } catch (error) {
    showError("Unable to initiate payment");
  }
};
