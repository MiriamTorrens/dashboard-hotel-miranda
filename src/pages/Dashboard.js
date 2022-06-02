import { ContainerAll, ContainerDashboard} from "../styles/Styles";
import Calendar from "../components/Calendar";
import Estadistics from "../components/Estadistics";
import DataCalendar from "../components/DataCalendar";
import Kpis from "../components/Kpis";
import Contacts from "../components/Contacts";

export default function Dashboard(){
    return(
        <ContainerAll>
            <Kpis/>
            <ContainerDashboard>
                <Calendar/>
                <Estadistics/>
            </ContainerDashboard>
            <DataCalendar/>
            <Contacts/>
        </ContainerAll>  
    )
}