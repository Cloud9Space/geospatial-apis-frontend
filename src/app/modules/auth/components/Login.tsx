import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../core/Auth'

const initialValues = {
  email: 'demo@razorpay.com',
  password: 'Demo123',
}
interface LoginCred {
  email: string
  password: string
}
const Login = () => {
  const { saveAuth, setCurrentUser } = useAuth()
  const navigator = useNavigate()
  const [loginCred, setLoginCred] = useState({} as LoginCred)
  const loginHandler = (e) => {
    e.preventDefault()
    if (initialValues.email === loginCred.email && initialValues.password === loginCred.password) {
      const data = {
        api_token: "string",
        refreshToken: "string"
      }
      saveAuth(data)
      const user = {
        username: "siddhant",
        password: "sid",
        email: "Email",
        first_name: "string",
        last_name: "string",
      }
      setCurrentUser(user)
    }
  }
  return (
    <div>
      <base href='../../../' />
      <meta charSet='utf-8' />
      <meta
        name='description'
        content='The most advanced Bootstrap 5 Admin Theme with 40 unique prebuilt layouts on Themeforest trusted by 100,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue, Asp.Net Core, Rails, Spring, Blazor, Django, Express.js, Node.js, Flask, Symfony & Laravel versions. Grab your copy now and get life-time updates for free.'
      />
      <meta
        name='keywords'
        content='metronic, bootstrap, bootstrap 5, angular, VueJs, React, Asp.Net Core, Rails, Spring, Blazor, Django, Express.js, Node.js, Flask, Symfony & Laravel starter kits, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='article' />
      <link rel='shortcut icon' href='assets/media/logos/custom-1.jpg' />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700'
      />

      <div className='d-flex flex-column flex-root'>
        <style>
          {`
          body {
            background-image: url('media/header-bg.jpg');
          }

          [data-bs-theme="dark"] body {
            background-image: url('media/header-dark-bg.jpg');
          }
        `}
        </style>
        <div className='d-flex flex-column flex-column-fluid flex-lg-row'>
          <div className='d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10'>
            <div className='d-flex flex-center flex-lg-start flex-column'>
              {/* <a href='../../demo2/dist/index.html' className='mb-7'> */}
                {/* <img alt='Logo' src='assets/media/logos/custom-3.svg' /> */}
                <div className='d-flex app-sidebar-logo-default h-25px' style={{paddingBottom: "20px"}}>
                  <p className='text-white text-white fs2qx fw-bolder text-center' style={{fontSize: "70px" ,}}>Geo</p>
                  <p className='textwhite fsqx fw-bolder text-center' style={{fontSize: "70px",  color: 'yellow'}}>APIs</p>
                </div>
              {/* </a> */}
              {/* <h2 className='text-white fw-normal m-0'>
                Human Resource Management System
              </h2> */}
            </div>
          </div>

          <div className='d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20'>
            <div className='bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20'>
              <div className='d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20'>
                <form onSubmit={loginHandler}>
                  <div className='text-center mb-11'>
                    <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
                    {/* <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div> */}
                  </div>
                  <div className='row g-3 mb-9'>
                    <div className='col-md-6'>
                      <a
                        href='#'
                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                      >
                        {/* <img
                          alt='Logo'
                          src='assets/media/svg/brand-logos/google-icon.svg'
                          className='h-15px me-3'
                        /> */}
                        Sign in with Google
                      </a>
                    </div>
                    <div className='col-md-6'>
                      <a
                        href='#'
                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                      >
                        {/* <img
                          alt='Logo'
                          src='assets/media/svg/brand-logos/apple-black.svg'
                          className='theme-light-show h-15px me-3'
                        />
                        <img
                          alt='Logo'
                          src='assets/media/svg/brand-logos/apple-black-dark.svg'
                          className='theme-dark-show h-15px me-3'
                        /> */}
                        Sign in with Apple
                      </a>
                    </div>
                  </div>
                  <div className='separator separator-content my-14'>
                    <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
                  </div>
                  <div className='fv-row mb-8'>
                    <input
                      type='text'
                      placeholder='Email'
                      name='email'
                      autoComplete='off'
                      className='form-control bg-transparent'
                      onChange={(e) => setLoginCred({ ...loginCred, email: e.target.value })}
                    />
                  </div>
                  <div className='fv-row mb-3'>
                    <input
                      type='password'
                      placeholder='Password'
                      name='password'
                      autoComplete='off'
                      className='form-control bg-transparent'
                      onChange={(e) => setLoginCred({ ...loginCred, password: e.target.value })}
                    />
                  </div>
                  <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
                    <div />
                    {/*begin::Link*/}
                    {/* <a href="../../demo2/dist/authentication/layouts/creative/reset-password.html" className="link-primary">Forgot Password ?</a> */}
                    {/*end::Link*/}
                  </div>
                  <div className='d-grid mb-10'>
                    <button type='submit' id='kt_sign_in_submit' className='btn btn-primary'>
                      <span className='indicator-label'>Sign In</span>
                      <span className='indicator-progress'>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2' />
                      </span>
                    </button>
                  </div>
                  <div className='text-gray-500 text-center fw-semibold fs-6'>
                    Not a Member yet?
                  </div>
                  {/* <a href="../../demo2/dist/authentication/layouts/creative/sign-up.html" className="link-primary">Sign up</a></div> */}
                </form>
              </div>
              <div className='d-flex flex-stack px-lg-10'>
                <div className='me-0'>
                  <button
                    className='btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-start'
                    data-kt-menu-offset='0px, 0px'
                  >
                    {/* <img
                      data-kt-element='current-lang-flag'
                      className='w-20px h-20px rounded me-3'
                      src='assets/media/flags/united-states.svg'
                    /> */}
                    <span data-kt-element='current-lang-name' className='me-1'>
                      English
                    </span>
                    <i className='ki-duotone ki-down fs-5 text-muted rotate-180 m-0' />
                  </button>
                  <div
                    className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7'
                    data-kt-menu='true'
                    id='kt_auth_lang_menu'
                  >
                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link d-flex px-5' data-kt-lang='English'>
                        <span className='symbol symbol-20px me-4'>
                          {/* <img
                            data-kt-element='lang-flag'
                            className='rounded-1'
                            src='assets/media/flags/united-states.svg'
                          /> */}
                        </span>
                        <span data-kt-element='lang-name'>English</span>
                      </a>
                    </div>
                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link d-flex px-5' data-kt-lang='Spanish'>
                        <span className='symbol symbol-20px me-4'>
                          {/* <img
                            data-kt-element='lang-flag'
                            className='rounded-1'
                            src='assets/media/flags/spain.svg'
                          /> */}
                        </span>
                        <span data-kt-element='lang-name'>Spanish</span>
                      </a>
                    </div>

                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link d-flex px-5' data-kt-lang='German'>
                        <span className='symbol symbol-20px me-4'>
                          {/* <img
                            data-kt-element='lang-flag'
                            className='rounded-1'
                            src='assets/media/flags/germany.svg'
                          /> */}
                        </span>
                        <span data-kt-element='lang-name'>German</span>
                      </a>
                    </div>
                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link d-flex px-5' data-kt-lang='Japanese'>
                        <span className='symbol symbol-20px me-4'>
                          {/* <img
                            data-kt-element='lang-flag'
                            className='rounded-1'
                            src='assets/media/flags/japan.svg'
                          /> */}
                        </span>
                        <span data-kt-element='lang-name'>Japanese</span>
                      </a>
                    </div>

                    <div className='menu-item px-3'>
                      <a href='#' className='menu-link d-flex px-5' data-kt-lang='French'>
                        <span className='symbol symbol-20px me-4'>
                          {/* <img
                            data-kt-element='lang-flag'
                            className='rounded-1'
                            src='assets/media/flags/france.svg'
                          /> */}
                        </span>
                        <span data-kt-element='lang-name'>French</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='d-flex fw-semibold text-primary fs-base gap-5'>
                  <a href='../../demo2/dist/pages/team.html' target='_blank'>
                    Terms
                  </a>
                  <a href='../../demo2/dist/pages/pricing/column.html' target='_blank'>
                    Plans
                  </a>
                  <a href='../../demo2/dist/pages/contact.html' target='_blank'>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
