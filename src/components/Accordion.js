import React, {useState} from "react";
import './Accordion.css';


function Accordion() {
    const[selected, setSelected] = useState(null)

    const toggle = (i) =>{
        if(selected === i ) {
              return setSelected(null)
        }

        setSelected(i)
    }

    return(
       
        <div className="container">
        <h2>Frequently Asked Question</h2>
        <p className='text'>Frequently Asked Questions
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br></br> sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
         
         <div className="wrapper"> 
         <div className="accordion">
             {Question.map((item, i) => (
                    <div className="item">
                      <div className="title" onClick={() =>toggle(i)}>
                       <h4>{item.question}</h4>
                       <span>{selected === i ? '-' : '+'}</span>
                     </div>
                     <div 
                     className={selected === i ? 'content show': 'content'}>{item.info}
                     </div>
                  </div>
                  ))}
           </div>
        </div>
        </div>
    )
   
}

const Question = [
 
     { 
        question: "Can I book appointment behalf of someone else ?",
        info: "Before you can edit someone else's calendar, they have to give you permission by sharing their calendar. They can follow the instructions at Calendar delegation in Outlook one the web for business to learn how. As an editor, you can create or edit events on the calendar. As a delegate, you can also respond to meeting invitations on the calendar owner's behalf. The calendar owner can also choose to give delegates access to private events"
    },
    {
     
        question: "Do I need a referral to see a Physiotherapist ?",
        info: "You do not need the referral of a doctor to schedule a visit to a physiotherapist. You can visit them without a referral from your GP. You will need to make the payment however, if you have private health insurance, you can swipe your card and then, you will need to make the remaining payment on your own.However, you do need a referral from a GP to a physiotherapist in case you want to take advantage of the Medicare rebate. Many people are not aware that they can take advantage of the Medicare rebate up to 5 times in a calendar year if they are suffering from a chronic illness and have been referred by their GP. If you do not want the rebate and want to visit a physiotherapist, you are free to do that but you will have to take care of the payment on your own."
    },
    {
      
        question: "Do you Have Venue Option for appointments ?",
        info: "Do you need flexibility with appointment types so you can include multiple team members or rounds of interviews? What about Salesforce integration? Do you have a global team that requires intelligent time zone detection for accurate scheduling? Understanding your business’ unique needs will help you find an online scheduling tool that delivers maximum value for your enterprise and accelerates growth. Remember that business needs change as you scale, so you’ll want to create an online booking system that can be customized and grow with you. "
    },
    {
      
        question: "What if I Have More questions that are not answered Here ?",
        info: "I recently watched a client of mine get bombarded with questions during a virtual town hall. He and his team had gathered their company to address questions about the pandemic, remote work, and stakeholder implications. Prior to the call, I had prepared my client to remain calm and not let other people’s anxieties trigger his own. But some of the questions still caught him off guard When someone asked about whether or not their company was eligible for government stimulus funds, my client got defensive and nervously dismissed the question. Then, in an attempt to calm the restless crowd, he began offering reassurances with no factual foundations — fueling further confusion and fear among his listeners. By the end of the meeting, he recovered reasonably well, but not without taking responsibility for his mistakes."
    },
    
]

export default  Accordion;