import { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialAuthButtons from '../components/SocialAuthButtons'
import './Auth.css'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate login
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        alert('Login functionality would be implemented here!')
    }

    return (
        <div className="auth-page">
            <div className="auth-page__bg">
                <div className="auth-page__glow auth-page__glow--1"></div>
                <div className="auth-page__glow auth-page__glow--2"></div>
                <div className="auth-page__grid"></div>
            </div>

            <div className="auth-container">
                <div className="auth-card">
                    {/* Header */}
                    <div className="auth-card__header">
                        <Link to="/" className="auth-card__logo">
                            <div className="auth-card__logo-icon">
                                <span>&lt;</span>
                                <span className="highlight">/</span>
                                <span>&gt;</span>
                            </div>
                            <div className="auth-card__logo-text">
                                <span>Developer's</span>
                                <span className="auth-card__logo-den">Den</span>
                            </div>
                        </Link>
                        <h1 className="auth-card__title">Welcome Back</h1>
                        <p className="auth-card__subtitle">Sign in to access your account</p>
                    </div>

                    {/* Social Auth */}
                    <SocialAuthButtons action="Sign in" />

                    {/* Divider */}
                    <div className="auth-divider">
                        <span>or continue with email</span>
                    </div>

                    {/* Form */}
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <div className="auth-password-field">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    className="form-input"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="auth-password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="auth-options">
                            <label className="auth-checkbox">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                />
                                <span className="auth-checkbox__box"></span>
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="auth-forgot">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg auth-submit"
                            disabled={isSubmitting}
                        >
                            <span>{isSubmitting ? 'Signing in...' : 'Sign In'}</span>
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="auth-card__footer">
                        <p>Don't have an account? <Link to="/signup">Create one</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
