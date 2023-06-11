function showDropdown(type) {
    const inputDropdown = document.getElementById('inputUnit');
    const outputDropdown = document.getElementById('outputUnit');
    
    // Clear previous options
    inputDropdown.innerHTML = '';
    outputDropdown.innerHTML = '';
    
    // Add options based on selected type
    switch (type) {
      case 'length':
        inputDropdown.innerHTML = `
          <option value="cm">Centimeters</option>
          <option value="m">Meters</option>
          <option value="km">Kilometers</option>
          <option value="in">Inches</option>
          <option value="ft">Feet</option>
          <option value="yd">Yards</option>
        `;
        outputDropdown.innerHTML = `
          <option value="cm">Centimeters</option>
          <option value="m">Meters</option>
          <option value="km">Kilometers</option>
          <option value="in">Inches</option>
          <option value="ft">Feet</option>
          <option value="yd">Yards</option>
        `;
        break;
      case 'temp':
        inputDropdown.innerHTML = `
          <option value="c">Celsius</option>
          <option value="f">Fahrenheit</option>
          <option value="k">Kelvin</option>
        `;
        outputDropdown.innerHTML = `
          <option value="c">Celsius</option>
          <option value="f">Fahrenheit</option>
          <option value="k">Kelvin</option>
        `;
        break;
      case 'area':
        inputDropdown.innerHTML = `
          <option value="sqm">Square Meters</option>
          <option value="sqft">Square Feet</option>
          <option value="acre">Acre</option>
          <option value="sqkm">Square Kilometer</option>
          <option value="sqcm">Square Centimeter</option>
          <option value="sqmm">Square Millimeter</option>
          <option value="ht">Hectare</option>
          <option value="sqyd">Square Yards</option>
        `;
        outputDropdown.innerHTML = `
        <option value="sqm">Square Meters</option>
        <option value="sqft">Square Feet</option>
        <option value="acre">Acre</option>
        <option value="sqkm">Square Kilometer</option>
        <option value="sqcm">Square Centimeter</option>
        <option value="sqmm">Square Millimeter</option>
        <option value="ht">Hectare</option>
        <option value="sqyd">Square Yards</option>
        `;
        break;
      case 'time':
        inputDropdown.innerHTML = `
        <option value="sec">Seconds</option>
        <option value="ms">MilliSeconds</option>
        <option value="mcs">MicroSeconds</option>
        <option value="ns">NanoSeconds</option>
        <option value="min">Minutes</option>
        <option value="hr">Hours</option>
        <option value="days">Days</option>
        <option value="mon">Months</option>
        <option value="years">Years</option>
        `;
        outputDropdown.innerHTML = `
          <option value="sec">Seconds</option>
          <option value="ms">MilliSeconds</option>
          <option value="mcs">MicroSeconds</option>
          <option value="ns">NanoSeconds</option>
          <option value="min">Minutes</option>
          <option value="hr">Hours</option>
          <option value="days">Days</option>
          <option value="mon">Months</option>
          <option value="year">Years</option>
        `;
        break;
      case 'weight':
        inputDropdown.innerHTML = `
          <option value="g">Grams</option>
          <option value="kg">Kilograms</option>
          <option value="mg">MilliGrams</option>
          <option value="mt">MetricTon</option>
          <option value="ou">Ounce</option>
          <option value="ca">Carat</option>
          <option value="lb">Pounds</option>
        `;
        outputDropdown.innerHTML = `
        <option value="g">Grams</option>
        <option value="kg">Kilograms</option>
        <option value="mg">MilliGrams</option>
        <option value="mt">MetricTon</option>
        <option value="ou">Ounce</option>
        <option value="ca">Carat</option>
        <option value="lb">Pounds</option>
        `;
        break;
      case 'volume':
        inputDropdown.innerHTML = `
          
          <option value="l">Liters</option>
          <option value="ml">Milliliters</option>
          <option value="gal">Gallons</option>
          <option value="cbm">Cubic Meter</option>
          <option value="cbcm">Cubic CentiMeter</option>
          <option value="cbkm">Cubic KiloMeter</option>
          <option value="cbmm">Cubic MilliMeter</option>
          
        `;
        outputDropdown.innerHTML = `
        <option value="l">Liters</option>
        <option value="ml">Milliliters</option>
        <option value="gal">Gallons</option>
        <option value="cbm">Cubic Meter</option>
        <option value="cbcm">Cubic CentiMeter</option>
        <option value="cbkm">Cubic KiloMeter</option>
        <option value="cbmm">Cubic MilliMeter</option>
        `;
        break;
      default:
        break;
    }
  }
