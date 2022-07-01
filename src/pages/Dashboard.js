import { AllWrapper, DashboardWrapper} from "../styles/Styles";
import Calendar from "../components/Calendar.tsx";
import Estadistics from "../components/Estadistics.tsx";
import DataCalendar from "../components/DataCalendar.tsx";
import Kpis from "../components/Kpis.tsx";
import ContactsDiv from "../components/ContactsDiv.tsx";

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