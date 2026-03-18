import { Section } from "@/components/Section/Section.jsx";

// import { Balisong } from '@/components/Balisong/Balisong.jsx';

import React, { Component } from "react";

import { BalisongList } from '@/components/BalisongList/BalisongList.jsx';

import balisong from '@/json/balisong.json';

import liveblade from '@/json/liveblade.json';

import css from './App.module.css'

export class App extends Component {

state = {
  isSafeBlade: false,
  isLiveBlade: false
}

allFiltration = () => {
  console.log("All")

  this.setState({ isSafeBlade: true, isLiveBlade: true });

};

safeBladeFiltration = () => {
  console.log("Safe blade")
  this.setState({ isSafeBlade: true, isLiveBlade: false });
};

liveBladeFiltration = () => {
  console.log("Live blade")
  this.setState({ isSafeBlade: false, isLiveBlade: true });
};
  render( ) {
// export function App() {
  return(
    // <div className={css.section}>
    <>
      <div className={css.filterBox}>
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
        </div>
      <Section isOn={this.state.isSafeBlade} title="Колекція балісонгів safe blade">
        <BalisongList items={balisong} />
      </Section>
      <Section isOn={this.state.isLiveBlade} title="Колекція балісонгів live blade">
        <BalisongList items={liveblade} />
      </Section>
    </>
    // </div>
  )
}
}