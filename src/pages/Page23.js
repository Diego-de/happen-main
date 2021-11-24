import {Link} from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy';
import React, {useState} from 'react'

const Page23 = () => {
    const FormStore = useStoreState(state => state.pagina23);

    const SetFormStore = useStoreActions(state => state.setForm);
    const [pag23, setPag23] = useState(FormStore)
  
    function salvarRadio(){
      FormStore.pagina23  = pag23;
      SetFormStore(FormStore);
    } 
 return(
    <div id="question-23">
            <h2>Questão 23</h2>
            <h3>Entendo plenamente o conceito dos quatro passos da comunicação não violenta </h3>
            <input id="question-2-answer-a" type="radio" name="favelang" checked={pag23 === 1}  onChange={()=>setPag23(1)}/> Concordo totalmente<br/>
            <input id="question-2-answer-b" type="radio" name="favelang" checked={pag23 === 0.75}  onChange={()=>setPag23(0.75)}/> Concordo parcialmente<br/>
            <input id="question-2-answer-c" type="radio" name="favelang" checked={pag23 === 0.25}  onChange={()=>setPag23(0.25)}/> Discordo parcialmente<br/>
            <input id="question-2-answer-d" type="radio" name="favelang" checked={pag23 === 0}  onChange={()=>setPag23(0)}/> Discordo totalmente<br/>
            <div id="submit2" class="button"> <div id="submit1" class="button"><Link style={{ textDecoration : 'none', color : 'black'  }} onClick={salvarRadio} to ={'/Page24'} >Próximo</Link></div></div>
            <div class="clearfix"></div>
            </div>

 )
}

export default Page23