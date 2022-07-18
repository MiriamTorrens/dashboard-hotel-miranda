import { AllWrapper, DashboardWrapper } from "../styles/Styles";
import Calendar from "../components/Calendar";
import Stadistics from "../components/Stadistics";
import DataCalendar from "../components/DataCalendar";
import Kpis from "../components/Kpis";
import ContactsDiv from "../components/ContactsDiv";

export default function Dashboard() {
  return (
    <AllWrapper>
      <Kpis />
      <DashboardWrapper>
        <Calendar />
        <Stadistics />
      </DashboardWrapper>
      <DataCalendar />
      <ContactsDiv />
    </AllWrapper>
  );
}
