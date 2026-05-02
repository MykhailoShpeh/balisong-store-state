import { Section } from "@/components/Section/Section.jsx";

// import { Balisong } from '@/components/Balisong/Balisong.jsx';

import React, { Component } from "react";

import { BalisongList } from '@/components/BalisongList/BalisongList.jsx';

// import balisong from '@/json/balisong.json';

// import liveblade from '@/json/liveblade.json';

import balisongs from '@/json/balisongs.json';

import css from './App.module.css';

import { Filter } from '@/components/Filter/Filter.jsx'


export class App extends Component {

state = {
  // isSafeBlade: false,
  // isLiveBlade: false
  balisongsArray: balisongs,
  title: 'Колекція балісонгів',
  //! Властивості для кошика
  activeButtonIndex: null,
  selectedKnifesIndxs: [] //! масив індексів обраних ножів
}

allFiltration = () => {
  console.log("All")
    
  this.setState({
    balisongsArray: balisongs,
    title: 'Колекція балісонгів'
  });

};

safeBladeFiltration = () => {
  console.log("Safe blade")
  const safeBladeArray = balisongs.filter(item => item.typeOfKnife === "trainer")
  console.log("safeBladeArray: ", safeBladeArray);
  this.setState({
    balisongsArray: safeBladeArray,
    title: 'Колекція trainer балісонгів'
  });
};

liveBladeFiltration = () => {
  console.log("Live blade")
  const liveBladeArray = balisongs.filter(item => item.typeOfKnife === "live blade")
  console.log("liveBladeArray: ", liveBladeArray);
  this.setState({
    balisongsArray: liveBladeArray,
    title: 'Колекція live blade балісонгів'
  });
};
  
  cartFiltration = () => {
    console.log("Live blade")
    // const cartArray = balisongs.filter(item => item.typeOfKnife === "live blade")
    // console.log("cartArray: ", cartArray);
    this.setState({
      // balisongsArray: cartArray,
      title: 'Кошик'
    });
  };

  ActiveButton = (id) => {
    console.log("id: ", id)

    this.setState({
      activeButtonIndex: id,
    })

    if (this.state.selectedKnifesIndxs.includes(id)) {
      console.log("Такий індекс вже є,тоді ВИДАЛЯЄМО його!❌");

      //! не = this.state.selectedKnifesIndxs, а = [...this.state.selectedKnifesIndxs], бо при 1 варіанті ми даємо посилання замість копії, це зламає роботу state
      const idArray = [...this.state.selectedKnifesIndxs]

      //! index - 1 замість newselectedKnifesIndxs.indexOf(index) не працює!
      idArray.splice(idArray.indexOf(id), 1);
      this.setState({
        selectedKnifesIndxs: idArray
      })
    }
    else {
      console.log("Такого індекса ще немає,тоді ДОДАЄМО його!✅");

      this.setState({
        // activeButtonIndex: index,
        selectedKnifesIndxs: [...this.state.selectedKnifesIndxs, id].sort((a, b) => a - b)
      });
    }

  }
  
  
  render( ) {

    const {
      selectedKnifesIndxs,


    } = this.state; //! деструктуризація, замість this.state.expample пишемо examp;e

    console.log("selectedKnifesIndxs: ", selectedKnifesIndxs);
    
  return(
    <>
      <Filter
        onAll={this.allFiltration}
        onSafeBlade={this.safeBladeFiltration}
        onLiveBlade={this.liveBladeFiltration}
        onCart={this.cartFiltration}
      />
      <Section title={this.state.title}>
        <BalisongList items={this.state.balisongsArray} onActive={this.ActiveButton} />
      </Section>
    </>
  )
}
}