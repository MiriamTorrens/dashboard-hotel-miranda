import { AllWrapper, DashboardWrapper} from "../styles/Styles";
import Calendar from "../components/Calendar";
import Estadistics from "../components/Estadistics";
import DataCalendar from "../components/DataCalendar";
import Kpis from "../components/Kpis";
import ContactsDiv from "../components/ContactsDiv";

export default function Dashboard(){
    return (
      <AllWrapper>
        <Kpis />
        <DashboardWrapper>
          <Calendar />
          <Estadistics />
        </DashboardWrapper>
        <DataCalendar />
        <ContactsDiv />
      </AllWrapper>
    );
}