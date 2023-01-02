import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getJob} from "../../service/Job-service";

export default function AllJob() {

    const dispatch = useDispatch()
    const job = useSelector(state => {
        console.log(state)
        return state.job.job
    })

    useEffect(()=>{
        dispatch(getJob())
    })
    return (
        <>
            <h1>sssssssssss</h1>
        </>
    )
}
