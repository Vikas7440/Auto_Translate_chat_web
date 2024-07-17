import MessageContainer from "../../components/messages/MessageContainer";
import { useParams } from "react-router-dom";


const Chatroom = () => {
    const params = useParams();
    console.log(params)
    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter '>
            <MessageContainer />

        </div>
    );
};
export default Chatroom;