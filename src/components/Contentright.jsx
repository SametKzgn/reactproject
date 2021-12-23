import React from 'react'
import Card from './Card'
import Slider from './Slider'
import Lastcards from './Lastcards'
import Sidebar from './Sidebar';
function Contentright() {
    
  const icondata = [
    {
      title: "Donations",
      icon: "fas fa-hand-holding-usd",
    },
    {
      title: "Airtime",
      icon: "fas fa-phone",
    },
    {
      title: "Internet",
      icon: "fas fa-wifi",
    },
    {
      title: "Data",
      icon: "fas fa-database",
    },
    {
      title: "Electricity",
      icon: "fas fa-bolt",
    },
    {
      title: "Betting",
      icon: "fas fa-clipboard-list",
    },
    {
      title: "Water",
      icon: "fas fa-tint",
    },
    {
      title: "Rent",
      icon: "fas fa-home",
    },
    {
      title: "Transport",
      icon: "fas fa-bus",
    },
    {
      title: "Ad",
      icon: "fab fa-google",
    },
    {
      title: "Insurance",
      icon: "fas fa-shield-alt",
    },
    {
      title: "Hospital",
      icon: "fas fa-hospital",
    },
    {
      title: "Groceries",
      icon: "fas fa-shopping-basket",
    },
    {
      title: "Clothes",
      icon: "fas fa-tshirt",
    },
    {
      title: "Entertainment",
      icon: "fas fa-film",
    },
    {
      title: "Gifts",

      icon: "fas fa-gift",
    },
    {
      title: "Education",
      icon: "fas fa-graduation-cap",
    },
    {
      title: "Baby",
      icon: "fas fa-baby",
    },
    {
      title: "Beach",
      icon: "fas fa-umbrella-beach",
    },
    {
      title: "Other",
      icon: "fas fa-question",
    },
  ];
    return (

        <div className='contentright'>
                 <Card/>
                 <Slider data={icondata}/>
                 <Lastcards/>
                 
        </div>
    )
}

export default Contentright
