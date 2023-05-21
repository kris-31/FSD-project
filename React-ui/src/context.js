import React, { Component } from "react";
import items from "./data";

const CropContext = React.createContext();

export default class CropProvider extends Component {
  state = {
    crops: [],
    sortedCrops: [],
    featuredCrops: [],
    loading: true,
    type: "all",
    crop: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    inorganic: false,
    organic: false,
  };

  // get data, when component mounts change the state
  componentDidMount() {
    let crops = this.formatData(items);
    let featuredCrops = crops.filter((crop) => crop.featured === true);

    let maxPrice = Math.max(...crops.map((item) => item.price));
    let maxSize = Math.max(...crops.map((item) => item.size));

    this.setState({
      crops,
      featuredCrops,
      sortedCrops: crops,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let crop = { ...item.fields, images, id };
      return crop;
    });
    return tempItems;
  }

  getCrop = (slug) => {
    let tempCrops = [...this.state.crops];
    const crop = tempCrops.find((crop) => crop.slug === slug);
    return crop;
  };

  // filtering inputs, slider for price
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterCrops
    );
  };

  // filter crops based on crop type
  filterCrops = () => {
    let {
      crops,
      type,
      crop,
      price,
      minSize,
      maxSize,
      inorganic,
      organic,
    } = this.state;

    // all the crops
    let tempCrops = [...crops];
    // transform value into number
    crop = parseInt(crop);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempCrops = tempCrops.filter((crop) => crop.type === type);
    }

    // filter by crop
    if (crop !== 1) {
      tempCrops = tempCrops.filter((crop) => crop.crop >= crop);
    }

    // filter by Price
    tempCrops = tempCrops.filter((crop) => crop.price <= price);


    // filter by inorganic
    if (inorganic) {
      tempCrops = tempCrops.filter((crop) => crop.inorganic === true);
    }
    // filter by organic
    if (organic) {
      tempCrops = tempCrops.filter((crop) => crop.organic === true);
    }

    // change state
    this.setState({ sortedCrops: tempCrops });
  };

  render() {
    return (
      <CropContext.Provider
        // make it available in the context
        value={{
          ...this.state,
          getCrop: this.getCrop,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </CropContext.Provider>
    );
  }
}

const CropConsumer = CropContext.Consumer;

export { CropProvider, CropConsumer, CropContext };

// HOC
export function withCropConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <CropConsumer>
        {(value) => <Component {...props} context={value} />}
      </CropConsumer>
    );
  };
}


