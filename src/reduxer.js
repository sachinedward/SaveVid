import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import React from 'react';
import {map} from 'lodash';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Navbar from './components/navbar';

const mapStateToProps = (state) => {
        return {
          items: state.items,
        }
      }

      const addItemAction = () => {
       
        return {
          type: 'ADD_ITEM'
        }
      }

      const removeItemAction = (index) => {
        return {
          type: 'REMOVE_ITEM',
          index: index // Index is the list item row index
        }
      }

      const editItemAction = (index, newValue) => {
        return {
          type: 'EDIT_ITEM',
          data: {
            index: index, // Index is the list item row index
            value: newValue, // Send the new value after keyboard input
          }
        }
      }


const appReducer = (state = {items: []}, action) => {
        let items = state.items.slice(); 
        console.log('Actions', action); 
        switch (action.type) {
          case 'ADD_ITEM':
            items.push('')
             // Add an extra element to items
            break;
          case 'REMOVE_ITEM':
            items.splice(action.index, 1); // Removes element at `index`
            break;
          case 'EDIT_ITEM':
            items[action.data.index] = action.data.value; // Change value of `index` to new value
            break;
             default:
      return state;
        }

        const newState = {
          items: items,
        }
        console.log('Current State', newState);
        return newState;
      }

      let store = createStore(appReducer, {
        items: [
          'NodeJs',
          'ReactJs',
          'Oviya',
          'Power Star'
        ]
      }, window.devToolsExtension ? window.devToolsExtension() : undefined)

     



class Watchist extends React.Component{
  constructor(props){
    super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.editItem = this.editItem.bind(this);
  }
  addItem () {
    this.props.dispatch(addItemAction())
  }
  removeItem (index) {
    this.props.dispatch(removeItemAction(index))
  }
  editItem (index, event)  {
    this.props.dispatch(editItemAction(index, event.target.value))
  }

  render() {
    const {items, addItem} = this.props;

    return(
<div>
            <table>
              <tbody>
                {map(items, (item, index) => {
                  return (<tr key={index}>
                    <td><TextField onChange={this.editItem.bind(null, index)} type="text" value={item} /></td>
                    <td>
                       <IconButton aria-label="Delete"onClick={this.removeItem.bind(null, index)} className="delete">
                            <Icon>delete</Icon>
                        </IconButton>
                    </td>
                  </tr>);
                })}
              </tbody>
            </table>
            <Button raised onClick={this.addItem} className="add">
              Add More
            </Button>
          </div>
    );
  }

}

   const ListApp = connect(
        mapStateToProps
      )(Watchist)
      

class AppBody extends React.Component {
  render() {
    return(
      <div>
         <Navbar />
         <Provider store={store}>
          <ListApp />
        </Provider>
        </div>
    );
  }
}
export default AppBody;
