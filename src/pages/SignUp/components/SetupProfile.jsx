import React, { useEffect, useRef } from 'react';
import '../styles/SetupProfile.css';
import { Link } from 'react-router-dom';
import { useProfileSetup, STATES, initDateOfBirthPicker } from '../../../utils/ProfileHelper';
import HideNav from "../../../utils/HideNav";

export default function SetupProfile({ goBack }) {
    const {
        gender, handleGenderSelect, showGenderOptions, setShowGenderOptions,
        state, handleStateSelect, showStateOptions, setShowStateOptions,
        avatar, fileInputRef, photoOptionsRef, handleAvatarChange, choosePhoto, showPhotoOptions, setShowPhotoOptions,
        city, setCity, street, setStreet, errors, setErrors, handleSubmit,
        genderDropdownRef, stateDropdownRef
    } = useProfileSetup();


    const dobInputRef = useRef(null);

    useEffect(() => {
        if (dobInputRef.current) {
            initDateOfBirthPicker(dobInputRef.current);
        }
    }, []);

    return (
        <div id="profile">
            <HideNav />
            <header>
                <Link to="/" aria-label="Back to homepage">
                    <h1>
                        Med<span>vance</span>
                    </h1>
                </Link>
            </header>

            <section className="profile-setup">
                <div className="form-header">
                    <button title="Back to previous" onClick={goBack}>
                        <i className="fas fa-arrow-left"></i>
                    </button>

                    <button onClick={handleSubmit}> Skip <i className="fas fa-chevron-right"></i></button>
                </div>

                <h2>Setup Your Profile</h2>

                <div className="avatar-wrapper" ref={photoOptionsRef}>
                    <img src={avatar} alt="Avatar" />
                    <button className="camera-icon" title="Upload a photo" onClick={() => setShowPhotoOptions(!showPhotoOptions)}>
                        <i className="fas fa-camera"></i>
                    </button>
                    <div className={`photo-options ${showPhotoOptions ? 'show' : ''}`}>
                        <button onClick={() => choosePhoto('camera')}>Take a photo</button>
                        <button onClick={() => choosePhoto('library')}>Choose from library</button>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleAvatarChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="dob-dropdown">
                            <input
                                type="text"
                                placeholder="Date of Birth"
                                ref={dobInputRef}
                                readOnly
                            />
                            <i className="fa fa-chevron-down"></i>
                        </div>
                        <div className="dropdown-wrapper" ref={genderDropdownRef}>
                            <div
                                className={`gender-dropdown ${showGenderOptions ? 'active' : ''}`}
                                onClick={() => {
                                    setShowGenderOptions(!showGenderOptions);
                                    setShowStateOptions(false);
                                }}
                            >
                                <span className={gender ? '' : 'placeholder'}>
                                    {gender || 'Gender'}
                                </span>
                                <i className="fa fa-chevron-down"></i>
                            </div>

                            <div className={`dropdown-options ${showGenderOptions ? 'show' : ''}`}>
                                {['Female', 'Male'].map(g => (
                                    <div key={g} className="dropdown-option" onClick={() => handleGenderSelect(g)}>
                                        <div className="circle-wrapper">
                                            <div className="outer-circle"><div className="inner-circle"></div></div>
                                        </div>{g}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="dropdown-wrapper" ref={stateDropdownRef}>
                            <div
                                className={`state-dropdown ${showStateOptions ? 'active' : ''}`}
                                onClick={() => {
                                    setShowStateOptions(!showStateOptions);
                                    setShowGenderOptions(false);
                                }}
                            >
                                <span className={state ? '' : 'placeholder'}>
                                    {state || 'State of residence'}
                                </span>
                                <i className="fa fa-chevron-down"></i>
                            </div>

                            <div className={`dropdown-options ${showStateOptions ? 'show' : ''}`}>
                                {STATES.map(s => (
                                    <div key={s} className="dropdown-option" onClick={() => handleStateSelect(s)}>
                                        <div className="circle-wrapper">
                                            <div className="outer-circle"><div className="inner-circle"></div></div>
                                        </div>{s}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <input
                                type="text"
                                placeholder="City of residence"
                                value={city}
                                onChange={(e) => {
                                    setCity(e.target.value);
                                    setErrors({});
                                }}
                            />
                            {errors.city && <small>{errors.city}</small>}
                        </div>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Street address"
                            value={street}
                            onChange={(e) => {
                                setStreet(e.target.value);
                                setErrors({});
                            }}
                        />
                        {errors.street && <small>{errors.street}</small>}
                    </div>

                    <button type="submit">Continue</button>
                </form>
            </section>
        </div>
    );
}
