
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import advancedFormat from 'dayjs/plugin/advancedFormat'

export const WeekSelect = ({onWeekSelect}) => {
    let [currentWeek, setcurrentWeek] = useState();
    const [lastWeekOfTheYear, setLastWeekOfTheYear] = useState();
    
    // aktiverar plugins (från dayjs-biblioteket) för hantering av veckor
    dayjs.extend(isoWeek); 
    dayjs.extend(weekOfYear);
    dayjs.extend(advancedFormat);
    
    const getLastWeekOfCurrentYear = () => {
        const forSureADayInYearsLastWeek = dayjs(`${dayjs().year()}-12-28`);
        return forSureADayInYearsLastWeek.isoWeek();
    }

    useEffect(() => {
        const currentWeek = dayjs().isoWeek();
        setcurrentWeek(currentWeek);
        const lastWeek = getLastWeekOfCurrentYear();
        setLastWeekOfTheYear(lastWeek);
    }, [])

    let startWeek = currentWeek;
    const allRemainingWeeksOfThisYear = [];
    for(let i = startWeek; i <= lastWeekOfTheYear; i++){
        allRemainingWeeksOfThisYear.push(i);
    }
    
    return(
            <select onChange={(e) => onWeekSelect(e.target.value)} className="p-2 rounded border">
                <option>Välj vecka</option>
                { currentWeek && lastWeekOfTheYear && 
                allRemainingWeeksOfThisYear.map((w) => (
                    <option key={w} value={w}>{w}</option>
                ))
                }
            </select>
    )
}