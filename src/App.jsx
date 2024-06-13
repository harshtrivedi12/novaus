import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Homepage from "./markup/Pages/Homepage1";
import Homepage2 from "./markup/Pages/Homepage2";
import Jobprofile from "./markup/Pages/Jobprofile";
import Jobmyresume from "./markup/Pages/Jobmyresume";
import Jobsappliedjob from "./markup/Pages/Jobsappliedjob";
import Jobsalert from "./markup/Pages/Jobsalert";
import Jobsavedjobs from "./markup/Pages/Jobsavedjobs";
import Jobcvmanager from "./markup/Pages/Jobcvmanager";
import Changepasswordpage from "./markup/Pages/Changepasswordpage";
import Companyprofile from "./markup/Pages/Companyprofile";
import Companyresume from "./markup/Pages/Companyresume";
import Componypostjobs from "./markup/Pages/Componypostjobs";
import Companymanage from "./markup/Pages/Companymanage";
import Companytransactions from "./markup/Pages/Companytransactions";
import Browsecandidates from "./markup/Pages/Browsecandidates";
import Aboutus from "./markup/Pages/Aboutus";
import Jobdetail from "./markup/Pages/Jobdetail";
import Companies from "./markup/Pages/Companies";
import Freejobalerts from "./markup/Pages/Freejobalerts";
import Browsejoblist from "./markup/Pages/Browsejoblist";
import Browsejobgrid from "./markup/Pages/Browsejobgrid";
import Browsejobfilterlist from "./markup/Pages/Browsejobfilterlist";
import Browsejobfiltergrid from "./markup/Pages/Browsejobfiltergrid";
import Categoryalljob from "./markup/Pages/Categoryalljob";
import Categorycompanyjob from "./markup/Pages/Categorycompanyjob";
import Categorydesignationsjob from "./markup/Pages/Categorydesignationsjob";
import Categoryjobs from "./markup/Pages/Categoryjobs";
import Categorylocationjobs from "./markup/Pages/Categorylocationjobs";
import Categoryskilljobs from "./markup/Pages/Categoryskilljobs";
import Portfoliogrid2 from "./markup/Pages/Portfoliogrid2";
import Loginpage1 from "./markup/Pages/Loginpage1";
import Loginpage2 from "./markup/Pages/Loginpage2";
import Loginpage3 from "./markup/Pages/Loginpage3";
import Register1 from "./markup/Pages/Register1";
import Register2 from "./markup/Pages/Register2";
import Error404 from "./markup/Pages/Error404";
import Contact from "./markup/Pages/Contact";
import Blogclassic from "./markup/Pages/Blogclassic";
import Blogclassicsidebar from "./markup/Pages/Blogclassicsidebar";
import Blogdetailgrid from "./markup/Pages/Blogdetailgrid";
import Blogdetailgridsidebar from "./markup/Pages/Blogdetailgridsidebar";
import Blogleftimg from "./markup/Pages/Blogleftimg";
import Blogdetail from "./markup/Pages/Blogdetail";
import ScrollToTop from "./markup/Element/ScrollToTop";
import UserPrivateRoute from "./markup/protectedRoute";
import ApplicantsJobPage from "./markup/Pages/ApplicantsJobPage";
import EmployeeJobPage from "./employeeMarkup/Pages/JobPage";
import "./css/plugins.css";
import "./css/style.css";
import "./css/templete.css";
import "./css/skin/skin-1.css";
import "./plugins/slick/slick.min.css";
import "./plugins/slick/slick-theme.min.css";
import EmployeeLogin from "./employeeMarkup/Pages/Loginpage2";
import EmployeeRegister1 from "./employeeMarkup/Pages/Register1";
import EmployeeHomepage from "./employeeMarkup/Pages/Homepage1";
import EmployeeJobProfile from "./employeeMarkup/Pages/Jobprofile";
import EmployeePrivateRoute from "./employeeMarkup/protectedRoute";
import EmployeeApplicantsJobPage from "./employeeMarkup/Pages/ApplicantJobPage";
import EmployeeJobmyresume from "./employeeMarkup/Pages/Jobmyresume";
import EmployeeJobsappliedjob from "./employeeMarkup/Pages/Jobsappliedjob";
import EmployeeJobsalert from "./employeeMarkup/Pages/Jobsalert";
import EmployeeJobsavedjobs from "./employeeMarkup/Pages/Jobsavedjobs";
import EmployeeJobcvmanager from "./employeeMarkup/Pages/Jobcvmanager";
import EmployeeChangepasswordpage from "./employeeMarkup/Pages/Changepasswordpage";
import EmployeeCompanyprofile from "./employeeMarkup/Pages/Companyprofile";
import EmployeeCompanyresume from "./employeeMarkup/Pages/Companyresume";
import EmployeeComponypostjobs from "./employeeMarkup/Pages/Componypostjobs";
import EmployeeCompanymanage from "./employeeMarkup/Pages/Companymanage";
import EmployeeCompanytransactions from "./employeeMarkup/Pages/Companytransactions";
import EmployeeBrowsecandidates from "./employeeMarkup/Pages/Browsecandidates";
import EmployeeAboutus from "./employeeMarkup/Pages/Aboutus";
import EmployeeJobdetail from "./employeeMarkup/Pages/Jobdetail";
import EmployeeCompanies from "./employeeMarkup/Pages/Companies";
import EmployeeFreejobalerts from "./employeeMarkup/Pages/Freejobalerts";
import EmployeeBrowsejoblist from "./employeeMarkup/Pages/Browsejoblist";
import EmployeeBrowsejobgrid from "./employeeMarkup/Pages/Browsejobgrid";
import EmployeeBrowsejobfilterlist from "./employeeMarkup/Pages/Browsejobfilterlist";
import EmployeeBrowsejobfiltergrid from "./employeeMarkup/Pages/Browsejobfiltergrid";
import EmployeeCategoryalljob from "./employeeMarkup/Pages/Categoryalljob";
import EmployeeCategorydesignationsjob from "./employeeMarkup/Pages/Categorydesignationsjob";
import EmployeeCategoryjobs from "./employeeMarkup/Pages/Categoryjobs";
import EmployeeCategorylocationjobs from "./employeeMarkup/Pages/Categorylocationjobs";
import EmployeeCategoryskilljobs from "./employeeMarkup/Pages/Categoryskilljobs";
import EmployeePortfoliogrid2 from "./employeeMarkup/Pages/Portfoliogrid2";
import EmployeeRegister2 from "./employeeMarkup/Pages/Register2";
import EmployeeError404 from "./employeeMarkup/Pages/Error404";
import EmployeeContact from "./employeeMarkup/Pages/Contact";
import EmployeeBlogclassic from "./employeeMarkup/Pages/Blogclassic";
import EmployeeBlogclassicsidebar from "./employeeMarkup/Pages/Blogclassicsidebar";
import EmployeeBlogdetailgrid from "./employeeMarkup/Pages/Blogdetailgrid";
import EmployeeBlogdetailgridsidebar from "./employeeMarkup/Pages/Blogdetailgridsidebar";
import EmployeeBlogleftimg from "./employeeMarkup/Pages/Blogleftimg";
import EmployeeBlogdetail from "./employeeMarkup/Pages/Blogdetail";
import JobPage from "./markup/Pages/JobPage";
import ProfilePage from "./employeeMarkup/Pages/ProfilePage";
import SkillTest from "./markup/Pages/SkillTest";
import EducationPage from "./markup/Pages/EducationPage";
import EmployeeCategorycompanyjob from "./employeeMarkup/Pages/Categorycompanyjob";
import Messages from "./markup/Pages/Messages";
import TermOfUse from "./markup/Pages/TermOfUse";
import DataPrivacyFramework from "./markup/Pages/DataPrivacyFramework";
import CookingAdvertising from "./markup/Pages/Cooking&Advertising";
import DataSharingHelps from "./markup/Pages/DataSharingHelps";
import ScopePrivacyNotice from "./markup/Pages/ScopePrivacyNotice";
import InformationNovaUsJobs from "./markup/Pages/InformationNovaUsJobs";
import RetentionPeriod from "./markup/Pages/RetentionPeriod";
import CookiesDigitalAdvertising from "./markup/Pages/Cookies&DigitalAdvertising";
import PrivacyRights from "./markup/Pages/PrivacyRights";
import InternationalTransfer from "./markup/Pages/InternationalTransfer";
import GeneralContactInformation from "./markup/Pages/GeneralContactInformation";
import SecurityCenterAccountManagement from "./markup/Pages/SecurityCenterAccountManagement";
import EmailScams from "./markup/Pages/EmailScams";
import OnlineInterviewScams from "./markup/Pages/OnlineInterviewScams";
import SecurityBugReporting from "./markup/Pages/SecurityBugReporting";
import AccessibilityCenter from "./markup/Pages/AccessibilityCenter";
import HowItWorksEmployee from "./markup/Pages/HowItWorksEmployee";
import HowItWorksCandidates from "./markup/Pages/HowItWorksCandidates";
import CompanyPage from "./markup/Pages/CompanyPageView";
import EmailVerification from "./markup/Pages/EmailVerification";
import NewPasswordSet from "./markup/Pages/NewPasswordSet";
import ForgotPassword from "./markup/Pages/ForgotPassword";
import ResetPassword from "./markup/Pages/ResetPassword";
import ResumeSecurity from "./markup/Pages/ResumeSecurity";
import LandingPage from "./employeeMarkup/Pages/LandingPage";
import Verifyemail from "./markup/Pages/Verifyemail";
function App() {
  const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="services" element={<LandingPage />} />
      <Route path="/*" element={<Error404 />} />

      <Route path="/user">
        <Route path="" element={<Homepage />} />
        <Route path="login" element={<Loginpage2 />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route path="register" element={<Register1 />} />
        <Route path="register-2" element={<Register2 />} />
        <Route path="verify" element={<Verifyemail />} />
        <Route
          path="jobs-profile"
          element={
            <UserPrivateRoute>
              <Jobprofile />
            </UserPrivateRoute>
          }
        />
        <Route
          path="skill-test"
          element={
            <UserPrivateRoute>
              <SkillTest />
            </UserPrivateRoute>
          }
        />
        <Route
          path="education-page"
          element={
            <UserPrivateRoute>
              <EducationPage />
            </UserPrivateRoute>
          }
        />
        <Route path="job-application" element={<JobPage />} />
        <Route
          path="applicant-job"
          element={
            <UserPrivateRoute>
              <ApplicantsJobPage />
            </UserPrivateRoute>
          }
        />{" "}
        <Route
          path="category-company-jobs"
          element={
            <UserPrivateRoute>
              <Categorycompanyjob />
            </UserPrivateRoute>
          }
        />
        <Route
          path="jobs-my-resume"
          element={
            <UserPrivateRoute>
              <Jobmyresume />
            </UserPrivateRoute>
          }
        />
        <Route
          path="jobs-applied-job"
          element={
            <UserPrivateRoute>
              <Jobsappliedjob />
            </UserPrivateRoute>
          }
        />
        <Route
          path="jobs-alerts"
          element={
            <UserPrivateRoute>
              <Jobsalert />
            </UserPrivateRoute>
          }
        />
        <Route
          path="company/:id"
          element={
            <UserPrivateRoute>
              <CompanyPage />
            </UserPrivateRoute>
          }
        />
        <Route
          path="messages"
          element={
            <UserPrivateRoute>
              <Messages />
            </UserPrivateRoute>
          }
        />
        <Route
          path="jobs-saved-jobs"
          element={
            <UserPrivateRoute>
              <Jobsavedjobs />
            </UserPrivateRoute>
          }
        />
        <Route
          path="jobs-cv-manager"
          element={
            <UserPrivateRoute>
              <Jobcvmanager />
            </UserPrivateRoute>
          }
        />
        <Route
          path="jobs-change-password"
          element={
            <UserPrivateRoute>
              <Changepasswordpage />
            </UserPrivateRoute>
          }
        />
        <Route
          path="company-profile"
          element={
            <UserPrivateRoute>
              <Companyprofile />
            </UserPrivateRoute>
          }
        />
        <Route
          path="company-resume"
          element={
            <UserPrivateRoute>
              <Companyresume />
            </UserPrivateRoute>
          }
        />
        <Route
          path="company-post-jobs"
          element={
            <UserPrivateRoute>
              <Componypostjobs />
            </UserPrivateRoute>
          }
        />
        <Route
          path="company-manage-job"
          element={
            <UserPrivateRoute>
              <Companymanage />
            </UserPrivateRoute>
          }
        />
        <Route
          path="company-transactions"
          element={
            <UserPrivateRoute>
              <Companytransactions />
            </UserPrivateRoute>
          }
        />
        <Route
          path="browse-candidates"
          element={
            <UserPrivateRoute>
              <Browsecandidates />
            </UserPrivateRoute>
          }
        />
        <Route
          path="job-page"
          element={
            <UserPrivateRoute>
              <JobPage />
            </UserPrivateRoute>
          }
        />
        <Route
          path="about-us"
          element={
            <UserPrivateRoute>
              <Aboutus />
            </UserPrivateRoute>
          }
        />
        <Route path="job-detail/:id" element={<Jobdetail />} />
        <Route
          path="companies"
          element={
            <UserPrivateRoute>
              <Companies />
            </UserPrivateRoute>
          }
        />
        <Route
          path="free-job-alerts"
          element={
            <UserPrivateRoute>
              <Freejobalerts />
            </UserPrivateRoute>
          }
        />
        <Route
          path="browse-job-list"
          element={
            <UserPrivateRoute>
              <Browsejoblist />
            </UserPrivateRoute>
          }
        />
        <Route
          path="browse-job-grid"
          element={
            <UserPrivateRoute>
              <Browsejobgrid />
            </UserPrivateRoute>
          }
        />
        <Route
          path="browse-job-filter-list"
          element={
            <UserPrivateRoute>
              <Browsejobfilterlist />
            </UserPrivateRoute>
          }
        />
        <Route
          path="browse-job-filter-grid"
          element={
            <UserPrivateRoute>
              <Browsejobfiltergrid />
            </UserPrivateRoute>
          }
        />
        <Route
          path="category-all-jobs"
          element={
            <UserPrivateRoute>
              <Categoryalljob />
            </UserPrivateRoute>
          }
        />
        <Route
          path="category-designations-jobs"
          element={
            <UserPrivateRoute>
              <Categorydesignationsjob />
            </UserPrivateRoute>
          }
        />
        <Route
          path="category-jobs"
          element={
            <UserPrivateRoute>
              <Categoryjobs />
            </UserPrivateRoute>
          }
        />
        <Route
          path="category-location-jobs"
          element={
            <UserPrivateRoute>
              <Categorylocationjobs />
            </UserPrivateRoute>
          }
        />
        <Route
          path="category-skill-jobs"
          element={
            <UserPrivateRoute>
              <Categoryskilljobs />
            </UserPrivateRoute>
          }
        />
        <Route
          path="portfolio-grid-2"
          element={
            <UserPrivateRoute>
              <Portfoliogrid2 />
            </UserPrivateRoute>
          }
        />
        <Route
          path="register-2"
          element={
            <UserPrivateRoute>
              <Register2 />
            </UserPrivateRoute>
          }
        />
        <Route
          path="verify"
          element={
            <UserPrivateRoute>
              <Verifyemail/>
            </UserPrivateRoute>
          }
        />
        <Route
          path="contact"
          element={
            <UserPrivateRoute>
              <Contact />
            </UserPrivateRoute>
          }
        />
        <Route
          path="blog-classic"
          element={
            <UserPrivateRoute>
              <Blogclassic />
            </UserPrivateRoute>
          }
        />
        <Route
          path="blog-classic-sidebar"
          element={
            <UserPrivateRoute>
              <Blogclassicsidebar />
            </UserPrivateRoute>
          }
        />
        <Route
          path="blog-detailed-grid"
          element={
            <UserPrivateRoute>
              <Blogdetailgrid />
            </UserPrivateRoute>
          }
        />
        <Route
          path="blog-detailed-grid-sidebar"
          element={
            <UserPrivateRoute>
              <Blogdetailgridsidebar />
            </UserPrivateRoute>
          }
        />
        <Route
          path="blog-left-img"
          element={
            <UserPrivateRoute>
              <Blogleftimg />
            </UserPrivateRoute>
          }
        />
        <Route
          path="blog-details"
          element={
            <UserPrivateRoute>
              <Blogdetail />
            </UserPrivateRoute>
          }
        />
        <Route
          path="email-verification"
          element={
            // <UserPrivateRoute>
            <EmailVerification />
            // </UserPrivateRoute>
          }
        />
        <Route
          path="new-password-set"
          element={
            <UserPrivateRoute>
              <NewPasswordSet />
            </UserPrivateRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Route>

      {/* routes for empployees */}

      <Route path="/employee">
        <Route
          path=""
          element={
            <EmployeePrivateRoute>
              <EmployeeHomepage />
            </EmployeePrivateRoute>
          }
        />
        <Route path="login" element={<EmployeeLogin />} />
        <Route path="register" element={<EmployeeRegister1 />} />
        <Route path="register-2" element={<EmployeeRegister2 />} />

        <Route
          path="jobs-profile"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobProfile />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="category-company-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategorycompanyjob />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="applicant-job"
          element={
            <EmployeePrivateRoute>
              <EmployeeApplicantsJobPage />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="jobs-my-resume"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobmyresume />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="jobs-applied-job"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobsappliedjob />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="jobs-alerts"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobsalert />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="jobs-saved-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobsavedjobs />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="jobs-cv-manager"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobcvmanager />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="jobs-change-password"
          element={
            <EmployeePrivateRoute>
              <EmployeeChangepasswordpage />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="company-profile"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanyprofile />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="company-resume"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanyresume />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="company-post-jobs/:id"
          element={
            <EmployeePrivateRoute>
              <EmployeeComponypostjobs />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="company-manage-job/:id"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanymanage />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="company-transactions"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanytransactions />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="browse-candidates"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsecandidates />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="about-us"
          element={
            <EmployeePrivateRoute>
              <EmployeeAboutus />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="job-detail"
          element={
            <EmployeePrivateRoute>
              <EmployeeJobdetail />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="companies"
          element={
            <EmployeePrivateRoute>
              <EmployeeCompanies />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="free-job-alerts"
          element={
            <EmployeePrivateRoute>
              <EmployeeFreejobalerts />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="browse-job-list"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsejoblist />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="browse-job-grid"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsejobgrid />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="browse-job-filter-list"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsejobfilterlist />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="browse-job-filter-grid"
          element={
            <EmployeePrivateRoute>
              <EmployeeBrowsejobfiltergrid />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="category-all-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategoryalljob />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="category-designations-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategorydesignationsjob />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="category-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategoryjobs />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="category-location-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategorylocationjobs />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="category-skill-jobs"
          element={
            <EmployeePrivateRoute>
              <EmployeeCategoryskilljobs />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="portfolio-grid-2"
          element={
            <EmployeePrivateRoute>
              <EmployeePortfoliogrid2 />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="register-2"
          element={
            <EmployeePrivateRoute>
              <EmployeeRegister2 />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="contact"
          element={
            <EmployeePrivateRoute>
              <EmployeeContact />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="blog-classic"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogclassic />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="blog-classic-sidebar"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogclassicsidebar />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="blog-detailed-grid"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogdetailgrid />
            </EmployeePrivateRoute>
          }
        />
        <Route
          path="blog-detailed-grid-sidebar"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogdetailgridsidebar />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="term-of-use-nova-jobs"
          element={
            // <EmployeePrivateRoute>
            <TermOfUse />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="resume-security"
          element={
            // <EmployeePrivateRoute>
            <ResumeSecurity />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="data-privacy-framework"
          element={
            // <EmployeePrivateRoute>
            <DataPrivacyFramework />
            // </EmployeePrivateRoute>
          }
        />

        <Route
          path="cooking-advertising-overview"
          element={
            // <EmployeePrivateRoute>
            <CookingAdvertising />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="data-sharing-helps-you"
          element={
            // <EmployeePrivateRoute>
            <DataSharingHelps />
            // </EmployeePrivateRoute>
          }
        />

        <Route
          path="scope-privacy-notice"
          element={
            // <EmployeePrivateRoute>
            <ScopePrivacyNotice />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="information-novaus-jobs"
          element={
            // <EmployeePrivateRoute>
            <InformationNovaUsJobs />
            // </EmployeePrivateRoute>
          }
        />

        <Route
          path="retention-period-resume-visibility"
          element={
            // <EmployeePrivateRoute>
            <RetentionPeriod />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="cookies-digital-advertising"
          element={
            // <EmployeePrivateRoute>
            <CookiesDigitalAdvertising />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="privacy-rights"
          element={
            // <EmployeePrivateRoute>
            <PrivacyRights />
            // </EmployeePrivateRoute>
          }
        />

        <Route
          path="international-transfer-of-personal-information"
          element={
            // <EmployeePrivateRoute>
            <InternationalTransfer />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="general-contact-information"
          element={
            // <EmployeePrivateRoute>
            <GeneralContactInformation />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="security-center-account-management"
          element={
            // <EmployeePrivateRoute>
            <SecurityCenterAccountManagement />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="safeguard-from-email-scams"
          element={
            // <EmployeePrivateRoute>
            <EmailScams />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="online-interview-scams"
          element={
            // <EmployeePrivateRoute>
            <OnlineInterviewScams />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="security-bug-reporting"
          element={
            // <EmployeePrivateRoute>
            <SecurityBugReporting />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="accessibility-center"
          element={
            // <EmployeePrivateRoute>
            <AccessibilityCenter />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="howitworks-for-employee"
          element={
            // <EmployeePrivateRoute>
            <HowItWorksEmployee />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="howitworks-for-candidates"
          element={
            // <EmployeePrivateRoute>
            <HowItWorksCandidates />
            // </EmployeePrivateRoute>
          }
        />
        <Route
          path="profilepage/:id"
          element={
            <EmployeePrivateRoute>
              <ProfilePage />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="messages"
          element={
            <EmployeePrivateRoute>
              <Messages />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="blog-left-img"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogleftimg />
            </EmployeePrivateRoute>
          }
        />

        <Route
          path="blog-details"
          element={
            <EmployeePrivateRoute>
              <EmployeeBlogdetail />
            </EmployeePrivateRoute>
          }
        />

        <Route path="candidate-listing" element={<EmployeeJobPage />} />
        <Route path="*" element={<EmployeeError404 />} />
      </Route>
    </Routes>
  );
}

export default App;
