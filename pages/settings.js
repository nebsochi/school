import IndexLayout from "../Layouts";
import Profile from "../components/settings/Profile";
import ContactUpdate from "../components/settings/ContactUpdate";
import AccountInformation from "../components/settings/AccountInformation";
import NavBar from "../components/NavBar";

function settings() {
  return (
    <IndexLayout>
      <NavBar page={"Settings"} />
      <Profile />
      <ContactUpdate />
      <AccountInformation />
    </IndexLayout>
  );
}

export default settings;
