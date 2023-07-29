// import {PrettyChatWindow} from 'react-chat-engine-pretty'

// const ChatsPage = (props) => {
    
//     return <div style={{ height: '100vh'}}>

//        <PrettyChatWindow
//        projectId='4455252b-c0fc-4fa2-8ca2-a402d402c52e'
//        username={props.user.username}
//        secret={props.user.secret}
//        style={{ height: '100%' }} />

//     </div>
// }
// export default ChatsPage 




import {MultiChatSocket, MultiChatWindow, useMultiChatLogic }
 from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
     const chatProps = useMultiChatLogic(
        '4455252b-c0fc-4fa2-8ca2-a402d402c52e', 
        props.user.username,
         props.user.secret
          );
 
     return <div style={{ height: '100vh'}}>
    <MultiChatSocket {...chatProps} />
          <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
 }
export default ChatsPage 