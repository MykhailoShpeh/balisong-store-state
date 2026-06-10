import { Section } from "@/components/Section/Section.jsx";

// import { Balisong } from '@/components/Balisong/Balisong.jsx';

import React, { Component } from "react";

import { BalisongList } from '@/components/BalisongList/BalisongList.jsx';

// import balisong from '@/json/balisong.json';

// import liveblade from '@/json/liveblade.json';

import balisongs from '@/json/balisongs.json';

import css from './App.module.css';

import { Filter } from '@/components/Filter/Filter.jsx';

import { updateSelectedModels } from '@/utils/updatesSelectedModels.js';

import {Sorter } from '@/components/Sorter/Sorter.jsx';

// //! Сортування, в якому моделі, яких немає в наявності знаходяться в кінці списку
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
const arrayYes = balisongs.filter(item => item.photos);

const arrayNo = balisongs.filter(item => !item.photos);

// console.log("arrayYes: ", arrayYes);
// console.log("arrayNo: ", arrayNo);

// balisongs.splice(0, balisongs.length);
balisongs.length = 0;

balisongs.push(...arrayYes, ...arrayNo)

// console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");


export class App extends Component {

state = {
  // isSafeBlade: false,
  // isLiveBlade: false
  balisongsArray: balisongs,
  title: 'Колекція балісонгів',
  //! Властивості для кошика
  activeButtonIndex: null,
  selectedKnifesIndxs: JSON.parse(localStorage.getItem("selectedKnifesIndxs")) || [], //! масив індексів обраних ножів
  selectedKnifesObjects: (JSON.parse(localStorage.getItem("selectedKnifesIndxs")) || []).flatMap((item) => balisongsArray.filter((el) => item === el.id)), //! //! масив обраних моделей
  isCartButton: false,
  selectedKnifesObjectsAfterFiltration: (JSON.parse(localStorage.getItem("selectedKnifesIndxs")) || []).flatMap((item) => balisongsArray.filter((el) => item === el.id)),
  balisongsArrayAfterFiltration: balisongs,
  inputSearchValue: "",
  searchInputValue: "", //! значення пошукового інпуту
  radioButtonValue: "name", //! значення параметра для пошуку/фільтрації радіо-кнопки
  inputSearchPlaceholder: "Введіть назву ножа" //! значення placeholder для inputSearch
}
  
  
  componentDidMount() {
    const saved = localStorage.getItem("selectedKnifesIndxs");
    if (!saved) {
      localStorage.setItem("selectedKnifesIndxs", JSON.stringify([]));
    }
  };

  //! 3.localStorage - Оновлення(синхронізація) localStorage при кожній зміні indicesSelectedModels
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedKnifesIndxs !== this.state.selectedKnifesIndxs) {
      localStorage.setItem(
        "selectedKnifesIndxs",
        JSON.stringify(this.state.selectedKnifesIndxs)
      );
    }
  };

allFiltration = () => {
  console.log("All")
    
  this.setState({
    balisongsArray: balisongs,
    title: 'Колекція балісонгів',
    isCartButton: false,
    balisongsArrayAfterFiltration: balisongs
  });

};

safeBladeFiltration = () => {
  console.log("Safe blade")
  const safeBladeArray = balisongs.filter(item => item.typeOfKnife === "trainer")
  console.log("safeBladeArray: ", safeBladeArray);
  this.setState({
    balisongsArray: safeBladeArray,
    title: 'Колекція trainer балісонгів',
    isCartButton: false,
    balisongsArrayAfterFiltration: safeBladeArray
  });
};

liveBladeFiltration = () => {
  console.log("Live blade")
  const liveBladeArray = balisongs.filter(item => item.typeOfKnife === "live blade")
  console.log("liveBladeArray: ", liveBladeArray);
  this.setState({
    balisongsArray: liveBladeArray,
    title: 'Колекція live blade балісонгів',
    isCartButton: false,
    balisongsArrayAfterFiltration: liveBladeArray

  });
};
  
  cartFiltration = () => {
    console.log("Live blade")
    // const cartArray = balisongs.filter(item => item.typeOfKnife === "live blade")
    // console.log("cartArray: ", cartArray);
    this.setState({
      balisongsArray: this.state.selectedKnifesObjects,
      title: 'Кошик',
      isCartButton: true,
      balisongsArrayAfterFiltration: this.state.selectedKnifesObjects

    });
  };

  ActiveButton = (id) => {
    console.log("id: ", id)

    // this.setState({
    //   activeButtonIndex: id,
    // })

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

    // this.selectedKnifesObjects()

  }

  //! Формуємо(оновлюємо) масив обраних моделей [selectedModels]

  // selectedKnifesObjects = () => {
  //   console.log("Функція selectedKnifesObjects")

  //   this.setState(
  //     prevState =>
  //     ({
  //       selectedKnifesObjects: prevState.selectedKnifesIndxs.flatMap((item) => balisongs.filter((el) => item === el.id))
  //     }))

  //   // return this.state.selectedKnifesIndxs.flatMap((item) => balisongs.filter((el) => item === el.id))
  // }

  handleChangeInputSearchValue = event => {
    console.log("event: ", event)
    const inputData = event.target.value;
    let onlyInputSearchValue;


    console.log("inputData: ", inputData)
    //todo Потрібно використати switch та при кожному значенні радіо кнопок використати перний case для їхньої фільтрації, case - фільтр що за певних умов фільтрує елементи

    switch (this.state.radioButtonValue) {
      case "name":
        //! за іменем
        this.state.isCartButton
          ? onlyInputSearchValue = this.state.selectedKnifesObjectsAfterFiltration.filter(item => item.nameOfKnife.toLowerCase().startsWith(inputData.trim().toLowerCase()))
          : onlyInputSearchValue = this.state.balisongsArrayAfterFiltration.filter(item => item.nameOfKnife.toLowerCase().startsWith(inputData.trim().toLowerCase()));

      case "price":
        //! за ціною
        this.state.isCartButton
          ? onlyInputSearchValue = this.state.selectedKnifesObjectsAfterFiltration.filter(item => item.price.toLowerCase().startsWith(inputData.trim().toLowerCase()))
          : onlyInputSearchValue = this.state.balisongsArrayAfterFiltration.filter(item => item.price.toLowerCase().startsWith(inputData.trim().toLowerCase()));
        break;

      case "typeOfBlade":
        //    //! за типом леза
        this.state.isCartButton
          ? onlyInputSearchValue = this.state.selectedKnifesObjectsAfterFiltration.filter(item => item.typeOfKnife.toLowerCase().startsWith(inputData.trim().toLowerCase()))
          : onlyInputSearchValue = this.state.balisongsArrayAfterFiltration.filter(item => item.typeOfKnife.toLowerCase().startsWith(inputData.trim().toLowerCase()));
        break;

      case "weight":
        //! за вагою
        this.state.isCartButton
          ? onlyInputSearchValue = this.state.selectedKnifesObjectsAfterFiltration.filter(item => item.weight.toLowerCase().startsWith(inputData.trim().toLowerCase()))
          : onlyInputSearchValue = this.state.balisongsArrayAfterFiltration.filter(item => item.weight.toLowerCase().startsWith(inputData.trim().toLowerCase()));
        break;

      default:
        console.log("Invalid");
    }

    console.log("✅onlyInputSearchValue: ", onlyInputSearchValue);

    this.state.isCartButton
      ? this.setState({
        inputSearchValue: inputData,
        selectedKnifesObjects: onlyInputSearchValue,
        searchInputValue: event.target.value
      })
      : this.setState({
        inputSearchValue: inputData,
        balisongsArray: onlyInputSearchValue,
        searchInputValue: event.target.value
      })
  }

  handleChangeRadioButtonValue = event => {
    console.log("Подія радіо кнопки");
    const target = event.target.value;
    // console.log("target: ", target);
    let placeHolder = "";

    switch (target) {
      case "name":
        placeHolder = "Введіть назву ножа"
        break;

      case "price":
        placeHolder = "Введіть вартість ножа"
        break;

      case "typeOfBlade":
        placeHolder = "Введіть тип леза ножа"
        break;

      case "weight":
        placeHolder = "Введіть вагу ножа"
        break;

      default:
        console.log("Invalid");
    }

    let array = [];

    this.setState({
      radioButtonValue: target,
      inputSearchPlaceholder: placeHolder,
      searchInputValue: "",
      balisongsArray: this.state.balisongsArrayAfterFiltration,
      selectedKnifesObjects: this.state.selectedKnifesObjectsAfterFiltration
    })

  }
  
  
  render( ) {

    const {
      selectedKnifesIndxs,
      selectedKnifesObjects,
      balisongsArray,
      isCartButton,
      inputSearchValue,
      searchInputValue,
      radioButtonValue,
      inputSearchPlaceholder
    } = this.state; //! деструктуризація, замість this.state.expample пишемо examp;e

    //! Рахуємо загальну кількість моделей <totalModels> виходячи з наявності фактичної ціни
    const totalModelsArray = isCartButton
      ? selectedKnifesObjects
        .flatMap(item => Object.values(item.model)
          .filter(value => value > 0))
      : balisongsArray
        .flatMap(item => Object.values(item.model)
          .filter(value => value > 0));

    const totalModels = totalModelsArray.length

    // console.log("selectedKnifesIndxs: ", selectedKnifesIndxs);
    // console.log("selectedKnifesObjects: ", selectedKnifesObjects);

    // const selectedKnifesObjects = updateSelectedModels(selectedKnifesIndxs,
    //   balisongs).sort((firstModel, secondModel) => firstModel.nameOfKnife.localeCompare(secondModel.nameOfKnife));
    
    const totalTypes = isCartButton ? selectedKnifesObjects.length : balisongsArray.length;
    
  return(
    <>
      <Filter
        onAll={this.allFiltration}
        onSafeBlade={this.safeBladeFiltration}
        onLiveBlade={this.liveBladeFiltration}
        onCart={this.cartFiltration}
        selectedLength={selectedKnifesObjects.length}
      />
      <Sorter
        onHandleChangeInputSearchValue={this.handleChangeInputSearchValue}
        searchInputValue={searchInputValue}
        onHandleChangeRadioButtonValue={this.handleChangeRadioButtonValue}
        radioButtonValue={radioButtonValue} //! значення параметра для пошуку/фільтрації радіо-кнопки
        inputSearchPlaceholder={inputSearchPlaceholder}
      />
      <Section
        title={this.state.title}
        selectedKnifesObjects={selectedKnifesObjects}
        isCartButton={isCartButton}
        totalTypes={totalTypes}
        totalModels={totalModels}
      >
        <BalisongList
          items={isCartButton ? selectedKnifesObjects : balisongsArray}
          onActive={this.ActiveButton}
          selectedKnifesIndxs={selectedKnifesIndxs}
          totalTypes={totalTypes}
        />
      </Section>
    </>
  )
}
}