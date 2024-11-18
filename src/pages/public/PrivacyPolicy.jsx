import { Fragment } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PrivacyPolicy() {
  return (
    <Fragment>
      <Header />
      <section className="container w-full lg:w-3/5 px-4 py-12 mx-auto space-y-16 sm:px-6 lg:py-16 lg:px-8 text-justify">
        <div className="text-center text-4xl font-bold text-business-primary">
          <h2>My750hrstracker Privacy Policy</h2>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            Introduction
          </h3>
          <p className="text-xl mb-2">
            Please read our Privacy Policy carefully as it explains the
            following:
          </p>
          <p className="text-xl">
            In order to use the My750HrsTracker app (“App”), you must first
            acknowledge and agree to our Privacy Policy. You cannot use the App
            without first accepting our Privacy Policy.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            General
          </h3>
          <p className="text-xl mb-2">
            My750HrsTracker (“My750HrsTracker,” “we,” “us”) respects your
            privacy and understands the importance of protecting your personal
            information. This Privacy Policy describes how My750HrsTracker
            collects, manages, stores, and utilizes your Personal Data when you
            use our App.
          </p>
          <p className="text-xl mb-2">
            By using our App, you agree to the collection and processing of your
            Personal Data as outlined in this Privacy Policy. If you do not
            agree with these terms, you may not use the App.
          </p>
          <p className="text-xl mb-2">
            My750HrsTracker is committed to safeguarding your Personal Data and
            providing a secure environment for app usage.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            PERSONAL DATA YOU PROVIDE
          </h3>
          <p className="text-xl mb-2">
            <span className="font-semibold">Account Credentials:</span> To use
            My750HrsTracker, you may need to create an account. This may involve
            providing information such as your phone number, first name, last
            name, email address, or using a third-party log-in like Google or
            Facebook. My750HrsTracker securely stores a hashed version of your
            authentication information for verification purposes.
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold">Profile Information:</span> When
            creating an account, you may choose to provide additional
            information such as your address or any other identifying details.
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold">Feedback and Support:</span> If you
            contact customer support, we may collect details such as your name,
            email address, IP address, and device model to address your feedback
            or support inquiries. We may retain communication records for
            quality and resolution purposes.
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold">Photos, Videos, and Audio:</span> If
            you upload media to My750HrsTracker, you will need to grant access
            to your device’s camera, photo gallery, and microphone. The App will
            only access files you explicitly allow.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            PERMISSIONS REQUIRED
          </h3>
          <p className="text-xl mb-2">
            To function as intended, My750HrsTracker may request access to:
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold">Internet:</span> For connectivity
            and data synchronization.
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold">Photo Library:</span> For adding
            media to your tracked hours.
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold">Camera:</span> To allow capturing
            photos directly within the App
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold">Notifications:</span> For updates
            and reminders.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            Third-Party Services and Links to Their Privacy Policies
          </h3>
          <p className="text-xl mb-2">
            The App may use third-party services for functionality and user
            experience enhancements. Here are links to the privacy policies of
            services we may employ:
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold mr-1">
              Apple App Store Services:
            </span>

            <a
              href="https://www.apple.com/legal/privacy/en-ww/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline text-business-primary"
            >
              Apple Privacy Policy
            </a>
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold mr-1">
              Google Play Store Services:
            </span>
            <a
              href="https://www.google.com/policies/privacy/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline text-business-primary"
            >
              Google Privacy Policy
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            Log Data
          </h3>
          <p className="text-xl mb-2">
            In the event of an error within the App, My750HrsTracker may collect
            Log Data, including information such as your device IP address,
            device name, OS version, app configurations, time and date of usage,
            and other diagnostic details.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            COOKIES & USAGE DATA
          </h3>
          <p className="text-xl mb-2">
            While My750HrsTracker does not use cookies directly, the App may
            utilize third-party code and libraries that use cookies to collect
            information and improve their services. You can choose to accept or
            decline these cookies. Note that declining cookies may impact some
            functionalities of the App.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            YOUR PERSONAL DATA SECURITY
          </h3>
          <p className="text-xl mb-2">
            My750HrsTracker is committed to ensuring the security of your data.
            While we use commercially reasonable methods to protect your
            information, please note that no internet-based service can
            guarantee absolute security.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            Payment Terms
          </h3>
          <p className="text-xl mb-2">
            If My750HrsTracker offers paid products or services, third-party
            payment processors (e.g., Apple Store In-App Payments, Google Play
            In-App Payments) will manage payment transactions. We do not store
            payment information. Please refer to the following for privacy
            policies of these services:
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold mr-1">
              Apple App Store Services:
            </span>

            <a
              href="https://www.apple.com/legal/privacy/en-ww/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline text-business-primary"
            >
              Apple Privacy Policy
            </a>
          </p>
          <p className="text-xl mb-2">
            <span className="font-semibold mr-1">
              Google Play Store Services:
            </span>
            <a
              href="https://www.google.com/policies/privacy/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline text-business-primary"
            >
              Google Privacy Policy
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            SERVICE PROVIDERS
          </h3>
          <p className="text-xl mb-2">
            We may work with third-party providers to facilitate the App’s
            services, manage analytics, and support user functionality. These
            providers have access to your personal information solely to perform
            tasks on our behalf and are contractually obligated not to disclose
            or use the information for other purposes.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            CHILDREN’S PRIVACY
          </h3>
          <p className="text-xl mb-2">
            My750HrsTracker is not intended for users under the age of 13. We do
            not knowingly collect personal information from children under 13.
            If you believe that a child has provided us with personal
            information, please contact us so we can take the necessary actions.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            UPDATES OR CHANGES TO OUR PRIVACY POLICY
          </h3>
          <p className="text-xl mb-2">
            We may periodically update this Privacy Policy to reflect changes in
            our practices or services. In the event of significant changes, we
            will notify you within the App. Continuing to use the App after
            updates implies consent to the revised Privacy Policy.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-business-primary uppercase">
            CONTACT INFORMATION
          </h3>
          <p className="text-xl mb-2">
            If you have any questions or concerns about our Privacy Policy,
            please contact us at:
          </p>
          <p>
            Controller <br /> My750HrsTracker <br />
            support@my750hrstracker.com
          </p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
