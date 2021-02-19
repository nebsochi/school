import IndexLayout from "../Layouts";
import Profile from "../components/settings/Profile";
import ContactUpdate from "../components/settings/contactUpdate";
import AccountInformation from "../components/settings/AccountInformation";

function settings() {
  return (
    <IndexLayout>
      <Profile />
      <ContactUpdate />
      <AccountInformation />
    </IndexLayout>
  );
}

export default settings;
