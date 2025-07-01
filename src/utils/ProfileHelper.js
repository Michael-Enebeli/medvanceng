import { useState, useEffect, useRef } from 'react';
import Datepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { showError } from '@/utils/Toast';
import { useNavigate } from 'react-router-dom';


export const STATES = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];

export const useProfileSetup = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState(sessionStorage.getItem('gender') || '');
  const [state, setState] = useState(sessionStorage.getItem('state') || '');
  const [avatar, setAvatar] = useState(sessionStorage.getItem('avatar') || '/images/avatar.png');
  const [city, setCity] = useState(sessionStorage.getItem('city') || '');
  const [street, setStreet] = useState(sessionStorage.getItem('street') || '');
  const [errors, setErrors] = useState({});
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [showStateOptions, setShowStateOptions] = useState(false);
  const [showPhotoOptions, setShowPhotoOptions] = useState(false);

  const fileInputRef = useRef(null);
  const genderDropdownRef = useRef(null);
  const stateDropdownRef = useRef(null);
  const photoOptionsRef = useRef(null);

  useEffect(() => {
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('state', state);
    sessionStorage.setItem('city', city);
    sessionStorage.setItem('street', street);
    sessionStorage.setItem('avatar', avatar);
  }, [gender, state, city, street, avatar]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (genderDropdownRef.current && !genderDropdownRef.current.contains(e.target)) setShowGenderOptions(false);
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(e.target)) setShowStateOptions(false);
      if (photoOptionsRef.current && !photoOptionsRef.current.contains(e.target)) setShowPhotoOptions(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleGenderSelect = (selected) => {
    setGender(selected);
    setShowGenderOptions(false);
  };

  const handleStateSelect = (selected) => {
    setState(selected);
    setShowStateOptions(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const MAX_SIZE = 4.5 * 1024 * 1024;

    if (file.size <= MAX_SIZE) {
      const reader = new FileReader();
      reader.onload = (evt) => setAvatar(evt.target.result);
      reader.readAsDataURL(file);
    } else {
      const img = new Image();
      const reader = new FileReader();
      reader.onload = (event) => (img.src = event.target.result);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = 1024 / img.width;
        canvas.width = 1024;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let quality = 0.9;
        let compressedDataUrl = canvas.toDataURL('image/jpeg', quality);

        while (compressedDataUrl.length * 0.75 > MAX_SIZE && quality > 0.1) {
          quality -= 0.05;
          compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        }

        setAvatar(compressedDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const choosePhoto = (type) => {
    if (type === 'camera') {
      fileInputRef.current.setAttribute('capture', 'environment');
    } else {
      fileInputRef.current.removeAttribute('capture');
    }
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cityRegex = /^[A-Za-z\s\-]+$/;
    const streetRegex = /^[A-Za-z0-9\s.,\-]+$/;
    const newErrors = {};
    if (city && !cityRegex.test(city)) newErrors.city = 'Invalid City';
    if (street && !streetRegex.test(street)) newErrors.street = 'Invalid Street Address';
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      setErrors({});
      const data = {
        gender: sessionStorage.getItem('gender'),
        state: sessionStorage.getItem('state'),
        city: sessionStorage.getItem('city'),
        street: sessionStorage.getItem('street'),
        avatar: sessionStorage.getItem('avatar'),
        fullname: sessionStorage.getItem('fullname'),
        email: sessionStorage.getItem('email'),
        password: sessionStorage.getItem('password'),
        dob: sessionStorage.getItem('dob'),
      };
      try {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
sessionStorage.setItem('pending', data.email);
        navigate('/verification');
        } else {
          const error = await response.json();
          showError(error.message);
        }
      } catch (error) {
        showError('An error occurred. Please try again later.');
        
      }
    }
  };

  return {
    gender, setGender, handleGenderSelect, showGenderOptions, setShowGenderOptions,
    state, setState, handleStateSelect, showStateOptions, setShowStateOptions,
    avatar, fileInputRef, photoOptionsRef, handleAvatarChange, choosePhoto, showPhotoOptions, setShowPhotoOptions,
    city, setCity, street, setStreet, errors, setErrors, handleSubmit,
    genderDropdownRef, stateDropdownRef
  };
};


export const initDateOfBirthPicker = (element) => {
  const savedDob = sessionStorage.getItem('dob');

  if (savedDob) {
    element.value = savedDob;
  }

  const datepicker = new Datepicker(element, {
    autoClose: true,
    dateFormat: 'dd MMMM yyyy',
    maxDate: new Date(),
    locale: {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      daysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      monthsShort: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      today: 'Today',
      clear: 'Clear',
      firstDay: 0
    },

    onSelect({ date, formattedDate }) {
      sessionStorage.setItem('dob', formattedDate);
      element.value = formattedDate;
    }
  });

  return datepicker;
};