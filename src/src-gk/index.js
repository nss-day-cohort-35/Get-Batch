import _ from 'lodash';




const element = document.createElement('div');
  
 
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());