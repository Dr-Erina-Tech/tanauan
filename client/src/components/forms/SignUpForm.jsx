import { useState, React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePasswordComplexity, validatePasswordMatch, validateRequiredFields } from './validations/validationForm'; // Assuming these functions exist in validation.js

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle the axios POST request to submit the registration form
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // reset the error message

    // Validate required fields
    const fields = { name, email, password, confirmPassword };
    const requiredFieldsError = validateRequiredFields(fields);
    if (requiredFieldsError) {
      setError(requiredFieldsError);
      return;
    }

     // Validate email
     const emailError = validateEmail(email);
     if (emailError) {
       setError(emailError);
       return;
     }

   // Validate password complexity
    const passwordComplexityError = validatePasswordComplexity(password);
    if (passwordComplexityError) {
      setError(passwordComplexityError);
      return;
    }

    // Validate password match
    const passwordMatchError = validatePasswordMatch(password, confirmPassword);
    if (passwordMatchError) {
      setError(passwordMatchError);
      return;
    }

    // If all validations pass, proceed with registration
    axios.post('http://localhost:3002/api/auth/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => {
        setError(err.response?.data?.message || "Registration Failed");
      });
  };
  
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    
                    {/* Display error message */}
                    {error && <p className="text-danger text-center">{error}</p>}

                    {/* Sign Up Form */}
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="nameInput"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="nameInput">Your Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="emailInput"
                            placeholder="Enter Email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="emailInput">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="passwordInput"
                            placeholder="Enter Password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="passwordInput">Password</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="confirmPasswordInput"
                            placeholder="Repeat Password"
                            className="form-control"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="confirmPasswordInput">Repeat your password</label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="termsCheckbox"
                          required
                        />
                        <label className="form-check-label" htmlFor="termsCheckbox">
                          I agree to all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                      </div>
                    </form>
                    {/* End of form */}

                    {/* Login Button */}
                    <div className="d-flex justify-content-center">
                      <p>Already have an account? <Link to="/login" className="btn btn-link">Login</Link></p>
                    </div>
                  </div>

                  {/* Image on the right */}
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
