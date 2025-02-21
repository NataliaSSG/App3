'use client'

import React, { useState } from "react";
import Header from '../components/header';

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [submittedName, setSubmittedName] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password: string) => {
        const re = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        return re.test(password);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;
        let newErrors = { name: "", email: "", password: "" };

        if (!formData.name) {
            newErrors.name = "Name is required";
            valid = false;
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Invalid email address";
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (!validatePassword(formData.password)) {
            newErrors.password = "Password must be at least 8 characters long, contain an uppercase letter and a special character";
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            setSubmittedName(formData.name);
            console.log(formData);
            // You can add further logic here to handle the form submission
        }
    };
    const errorMessages = Object.values(errors).filter((msg) => msg);

    return (
        <div>
            <Header />
            <div className="absolute top-40 right-10">
                {submittedName && <h2 className="text-3xl">{submittedName}</h2>}
            </div>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="flex flex-col gap-4">
                    <div className="w-72 p-5 shadow-lg rounded-lg bg-white mt-16">
                        <h2 className="text-center mb-5 text-2xl">Sign Up</h2>
                        <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="p-2 rounded border border-gray-300"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="p-2 rounded border border-gray-300"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="p-2 rounded border border-gray-300"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button type="submit" className="p-2 rounded bg-pink-400 text-white border-none cursor-pointer">
                                Sign Up
                            </button>

                        </form>
                    </div>
                    {errorMessages.length > 0 && (
                        <div className="w-72 mt-4">
                            {errorMessages.map((error, index) => (
                                <p key={index} className="text-red-500 text">
                                    {error}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
