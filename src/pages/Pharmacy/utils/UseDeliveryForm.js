import { useState, useEffect, useRef } from "react";

export const useDeliveryForm = () => {
  const [formData, setFormData] = useState(() => {
    const local = localStorage.getItem("deliveryForm");
    const session = sessionStorage.getItem("deliveryForm");
    const stored = JSON.parse(local || session || "{}");
    


    return {
      firstName: stored.firstName || "",
      lastName: stored.lastName || "",
      email: stored.email || "",
      phone: stored.phone || "",
      city: stored.city || "",
      state: stored.state || "",
      address: stored.address || "",
      remember: stored.remember || false,
    };
  });

  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 
  

  const STATES = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo",
    "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
    "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
    "Yobe", "Zamfara"
  ];

  const validate = (data) => {
    const errs = {};
    const nameRegex = /^[A-Za-zÀ-ÿ'’\-]{2,}(?: [A-Za-zÀ-ÿ'’\-]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;

    if (!nameRegex.test(data.firstName)) errs.firstName = "Enter a valid first name";
    if (!nameRegex.test(data.lastName)) errs.lastName = "Enter a valid last name";
    if (!emailRegex.test(data.email)) errs.email = "Enter a valid email";
    if (!phoneRegex.test(data.phone)) errs.phone = "Phone must be 11 digits";
    if (!data.city.trim()) errs.city = "City is required";
    if (!data.state.trim()) errs.state = "State is required";
    if (!data.address.trim()) errs.address = "Address is required";

    return errs;
  };

  useEffect(() => {
    sessionStorage.setItem("deliveryForm", JSON.stringify(formData));
    if (formData.remember) {
      localStorage.setItem("deliveryForm", JSON.stringify(formData));
    } else {
      localStorage.removeItem("deliveryForm");
    }
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const handleBlur = (field) => {
    const touched = JSON.parse(sessionStorage.getItem("touchedFields") || "{}");
    touched[field] = true;
    sessionStorage.setItem("touchedFields", JSON.stringify(touched));

    const newErrors = validate(formData);
    if (newErrors[field]) {
      setErrors(prev => ({ ...prev, [field]: newErrors[field] }));
    } else {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };



  const isValid = Object.keys(validate(formData)).length === 0;

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);


  useEffect(() => {
    const touched = JSON.parse(sessionStorage.getItem("touchedFields") || "{}");
    const allErrors = validate(formData);
    const filteredErrors = {};

    for (const field in allErrors) {
      if (touched[field]) {
        filteredErrors[field] = allErrors[field];
      }
    }

    setErrors(filteredErrors);
  },[]);





  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    dropdownOpen,
    setDropdownOpen,
    dropdownRef, 
    STATES,
    isValid
  };
};
