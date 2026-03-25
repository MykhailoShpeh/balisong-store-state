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
  title: 'Колекція балісонгів'
}

allFiltration = () => {
  console.log("All")
    
  this.setState({
    // isSafeBlade: true,
    // isLiveBlade: true,
    balisongsArray: balisongs,
    title: 'Колекція балісонгів'
  });

};

safeBladeFiltration = () => {
  console.log("Safe blade")
  const safeBladeArray = balisongs.filter(item => item.typeOfKnife === "trainer")
  console.log("safeBladeArray: ", safeBladeArray);
  this.setState({
    // isSafeBlade: true,
    // isLiveBlade: false
    balisongsArray: safeBladeArray,
    title: 'Колекція trainer балісонгів'
  });
};

liveBladeFiltration = () => {
  console.log("Live blade")
  const liveBladeArray = balisongs.filter(item => item.typeOfKnife === "live blade")
  console.log("liveBladeArray: ", liveBladeArray);
  this.setState({
    // isSafeBlade: false,
    // isLiveBlade: true
    balisongsArray: liveBladeArray,
    title: 'Колекція live blade балісонгів'
  });
};
  render( ) {
// export function App() {
  return(
    // <div className={css.section}>
    <>
      {/*//!  Filter */}
      {/* <div className={css.filterBox}>
        <button
          className={css.buttonAllFiltration}
          type="button"
          onClick={this.allFiltration}
        >
          ВСІ
        </button>

        <button
          className={css.buttonFiltration}
          type="button"
          onClick={this.safeBladeFiltration}
        >
          з тренувальним лезом
        </button>

        <button
          className={css.buttonFiltration}
          type="button"
          onClick={this.liveBladeFiltration}
        >
          з небезпечним лезом
        </button>
        </div> */}
      {/* //! */}
      <Filter
        onAll={this.allFiltration}
        onSafeBlade={this.safeBladeFiltration}
        onLiveBlade={this.liveBladeFiltration}
      />
      {/* <Section isOn={this.state.isSafeBlade} title="Колекція балісонгів safe blade">
        <BalisongList items={balisong} />
      </Section>
      <Section isOn={this.state.isLiveBlade} title="Колекція балісонгів live blade">
        <BalisongList items={liveblade} />
      </Section> */}
      <Section title={this.state.title}>
        <BalisongList items={this.state.balisongsArray} />
      </Section>
    </>
    // </div>
  )
}
}