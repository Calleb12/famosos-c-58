import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 
  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Charles Babbage"  
            color = "red"
            onPress= {alert ('cientista, matemático, filósofo, engenheiro mecânico e inventor inglês')}
             //adicione o código aqui para mostrar a caixa de alerta para o pai da computação.
            />

        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
            onPress= {alert ('Líder político e religioso indiano')}
              //add code here to show alert box for The father of nation
            />

        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
            onPress= {alert ('líder sul-africano ')}
                        //adicione o código aqui para mostrar a caixa de alerta para o primeiro presidente negro da África do Sul.
/>
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Madre Teresa"  
            color = "green"
                        onPress= {alert ('a freira dos pobres')}
            //adicione o código aqui para mostrar a caixa de alerta para o botão Madre Teresa
            
             />
        </View>
      </View>
    )
  }
}