function convert() {
  var inputValue = parseFloat(document.getElementById("inputValue").value);
  var inputUnit = document.getElementById("inputUnit").value;
  var outputUnit = document.getElementById("outputUnit").value;

  // Conversion formulas for Length
  if (inputUnit === "cm") {
    if (outputUnit === "cm") result = inputValue;
    else if (outputUnit === "m") result = inputValue / 100;
    else if (outputUnit === "km") result = inputValue / 100000;
    else if (outputUnit === "in") result = inputValue / 2.54;
    else if (outputUnit === "ft") result = inputValue / 30.48;
    else if (outputUnit === "yd") result = inputValue / 91.44;
  } else if (inputUnit === "m") {
    if (outputUnit === "cm") result = inputValue * 100;
    else if (outputUnit === "m") result = inputValue;
    else if (outputUnit === "km") result = inputValue / 1000;
    else if (outputUnit === "in") result = inputValue * 39.37;
    else if (outputUnit === "ft") result = inputValue * 3.281;
    else if (outputUnit === "yd") result = inputValue * 1.094;
  } else if (inputUnit === "km") {
    if (outputUnit === "cm") result = inputValue * 100000;
    else if (outputUnit === "m") result = inputValue * 1000;
    else if (outputUnit === "km") result = inputValue;
    else if (outputUnit === "in") result = inputValue * 39370.079;
    else if (outputUnit === "ft") result = inputValue * 3280.84;
    else if (outputUnit === "yd") result = inputValue * 1093.613;
  } else if (inputUnit === "in") {
    if (outputUnit === "cm") result = inputValue * 2.54;
    else if (outputUnit === "m") result = inputValue * 0.0254;
    else if (outputUnit === "km") result = inputValue * 0.0000254;
    else if (outputUnit === "in") result = inputValue;
    else if (outputUnit === "ft") result = inputValue * 0.083333;
    else if (outputUnit === "yd") result = inputValue * 0.027778;
  } else if (inputUnit === "ft") {
    if (outputUnit === "cm") result = inputValue * 30.48;
    else if (outputUnit === "m") result = inputValue * 0.3048;
    else if (outputUnit === "km") result = inputValue * 0.0003048;
    else if (outputUnit === "in") result = inputValue * 12;
    else if (outputUnit === "ft") result = inputValue;
    else if (outputUnit === "yd") result = inputValue * 0.333333;
  } else if (inputUnit === "yd") {
    if (outputUnit === "cm") result = inputValue * 91.44;
    else if (outputUnit === "m") result = inputValue * 0.9144;
    else if (outputUnit === "km") result = inputValue * 0.0009144;
    else if (outputUnit === "in") result = inputValue * 36;
    else if (outputUnit === "ft") result = inputValue * 3;
    else if (outputUnit === "yd") result = inputValue;
  }

  // conversion formula  for temperature

  if (inputUnit === "c") {
    if (outputUnit === "c") result = inputValue;
    else if (outputUnit === "f") result = (inputValue * 9) / 5 + 32;
    else if (outputUnit === "k") result = inputValue + 273.15;
  } else if (inputUnit === "f") {
    if (outputUnit === "c") result = ((inputValue - 32) * 5) / 9;
    else if (outputUnit === "f") result = inputValue;
    else if (outputUnit === "k") result = ((inputValue - 32) * 5) / 9 + 273.15;
  } else if (inputUnit === "k") {
    if (outputUnit === "c") result = inputValue - 273.15;
    else if (outputUnit === "f") result = ((inputValue - 273.15) * 9) / 5 + 32;
    else if (outputUnit === "k") result = inputValue;
  }

  // conversion formula  for area

  if (inputUnit === "sqm") {
    if (outputUnit === "sqkm") {
      result = inputValue / 1000000;
    } else if (outputUnit === "sqcm") {
      result = inputValue * 10000;
    } else if (outputUnit === "sqmm") {
      result = inputValue * 1000000;
    } else if (outputUnit === "sqyd") {
      result = inputValue * 1.19599;
    } else if (outputUnit === "ht") {
      result = inputValue / 10000;
    } else if (outputUnit === "sqft") {
      result = inputValue * 10.7639;
    } else if (outputUnit === "acre") {
      result = inputValue / 4046.86;
    } else {
      result = inputValue;
    }
  } else if (inputUnit === "sqkm") {
    if (outputUnit === "sqm") {
      result = inputValue * 1000000;
    } else if (outputUnit === "sqcm") {
      result = inputValue * 10000000000;
    } else if (outputUnit === "sqmm") {
      result = inputValue * 1000000000000;
    } else if (outputUnit === "sqyd") {
      result = inputValue * 1195990.05;
    } else if (outputUnit === "ht") {
      result = inputValue * 100;
    } else if (outputUnit === "sqft") {
      result = inputValue * 10763910.4;
    } else if (outputUnit === "acre") {
      result = inputValue * 247.105;
    } else {
      result = inputValue;
    }
  } else if (inputUnit === "sqcm") {
    if (outputUnit === "sqm") {
      result = inputValue / 10000;
    } else if (outputUnit === "sqkm") {
      result = inputValue / 10000000000;
    } else if (outputUnit === "sqmm") {
      result = inputValue * 100;
    } else if (outputUnit === "sqyd") {
      result = inputValue / 8361.2736;
    } else if (outputUnit === "ht") {
      result = inputValue / 100000000;
    } else if (outputUnit === "sqft") {
      result = inputValue / 929.0304;
    } else if (outputUnit === "acre") {
      result = inputValue / 40468564.224;
    } else {
      result = inputValue;
    }
  } else if (inputUnit === "sqmm") {
    if (outputUnit === "sqm") {
      result = inputValue / 1000000;
    } else if (outputUnit === "sqkm") {
      result = inputValue / 1000000000000;
    } else if (outputUnit === "sqcm") {
      result = inputValue / 100;
    } else if (outputUnit === "sqyd") {
      result = inputValue / 836127.36;
    } else if (outputUnit === "ht") {
      result = inputValue / 10000000000;
    } else if (outputUnit === "sqft") {
      result = inputValue / 92903.04;
    } else if (outputUnit === "acre") {
      result = inputValue / 4046856422.4;
    } else {
      result = inputValue;
    }
  } else if (inputUnit === "sqyd") {
    if (outputUnit === "sqm") {
      result = inputValue / 1.19599;
    } else if (outputUnit === "sqkm") {
      result = inputValue / 1195990.05;
    } else if (outputUnit === "sqcm") {
      result = inputValue * 8361.2736;
    } else if (outputUnit === "sqmm") {
      result = inputValue * 836127.36;
    } else if (outputUnit === "ht") {
      result = inputValue / 11959.9005;
    } else if (outputUnit === "sqft") {
      result = inputValue * 9;
    } else if (outputUnit === "acre") {
      result = inputValue / 4840;
    } else {
      result = inputValue;
    }
  } else if (inputUnit === "ht") {
    if (outputUnit === "sqm") {
      result = inputValue * 10000;
    } else if (outputUnit === "sqkm") {
      result = inputValue / 100;
    } else if (outputUnit === "sqcm") {
      result = inputValue * 100000000;
    } else if (outputUnit === "sqmm") {
      result = inputValue * 10000000000;
    } else if (outputUnit === "sqyd") {
      result = inputValue * 11959.9005;
    } else if (outputUnit === "sqft") {
      result = inputValue * 107639.104;
    } else if (outputUnit === "acre") {
      result = inputValue * 2.47105;
    } else {
      result = inputValue;
    }
  } else if (inputUnit === "sqft") {
    if (outputUnit === "sqm") {
      result = inputValue / 10.7639;
    } else if (outputUnit === "sqkm") {
      result = inputValue / 10763910.4;
    } else if (outputUnit === "sqcm") {
      result = inputValue * 929.0304;
    } else if (outputUnit === "sqmm") {
      result = inputValue * 92903.04;
    } else if (outputUnit === "sqyd") {
      result = inputValue / 9;
    } else if (outputUnit === "ht") {
      result = inputValue / 107639.104;
    } else if (outputUnit === "acre") {
      result = inputValue / 43560;
    } else {
      result = inputValue;
    }
  } else if (inputUnit === "acre") {
    if (outputUnit === "sqm") {
      result = inputValue * 4046.86;
    } else if (outputUnit === "sqkm") {
      result = inputValue / 247.105;
    } else if (outputUnit === "sqcm") {
      result = inputValue * 40468564.224;
    } else if (outputUnit === "sqmm") {
      result = inputValue * 4046856422.4;
    } else if (outputUnit === "sqyd") {
      result = inputValue * 4840;
    } else if (outputUnit === "ht") {
      result = inputValue / 2.47105;
    } else if (outputUnit === "sqft") {
      result = inputValue * 43560;
    } else {
      result = inputValue;
    }
  }
  // conversion formula  for Time

  if (inputUnit === "ns") {
    if (outputUnit === "mcs") {
      result = inputValue / 1000;
    } else if (outputUnit === "ms") {
      result = inputValue / 1000000;
    } else if (outputUnit === "sec") {
      result = inputValue / 1e9;
    } else if (outputUnit === "min") {
      result = inputValue / 6e10;
    } else if (outputUnit === "hr") {
      result = inputValue / 3.6e12;
    } else if (outputUnit === "days") {
      result = inputValue / 8.64e13;
    } else if (outputUnit === "mon") {
      result = inputValue / 2.628e15;
    } else if (outputUnit === "years") {
      result = inputValue / 3.154e16;
    }
  } else if (inputUnit === "mcs") {
    if (outputUnit === "ns") {
      result = inputValue * 1000;
    } else if (outputUnit === "ms") {
      result = inputValue / 1000;
    } else if (outputUnit === "sec") {
      result = inputValue / 1e6;
    } else if (outputUnit === "min") {
      result = inputValue / 6e7;
    } else if (outputUnit === "hr") {
      result = inputValue / 3.6e9;
    } else if (outputUnit === "days") {
      result = inputValue / 8.64e10;
    } else if (outputUnit === "mon") {
      result = inputValue / 2.628e12;
    } else if (outputUnit === "years") {
      result = inputValue / 3.154e13;
    }
  } else if (inputUnit === "ms") {
    if (outputUnit === "ns") {
      result = inputValue * 1000000;
    } else if (outputUnit === "mcs") {
      result = inputValue * 1000;
    } else if (outputUnit === "sec") {
      result = inputValue / 1000;
    } else if (outputUnit === "min") {
      result = inputValue / 6e4;
    } else if (outputUnit === "hr") {
      result = inputValue / 3.6e6;
    } else if (outputUnit === "days") {
      result = inputValue / 8.64e7;
    } else if (outputUnit === "mon") {
      result = inputValue / 2.628e9;
    } else if (outputUnit === "years") {
      result = inputValue / 3.154e10;
    }
  } else if (inputUnit === "sec") {
    if (outputUnit === "ns") {
      result = inputValue * 1e9;
    } else if (outputUnit === "mcs") {
      result = inputValue * 1e6;
    } else if (outputUnit === "ms") {
      result = inputValue * 1000;
    } else if (outputUnit === "min") {
      result = inputValue / 60;
    } else if (outputUnit === "hr") {
      result = inputValue / 3600;
    } else if (outputUnit === "days") {
      result = inputValue / 86400;
    } else if (outputUnit === "mon") {
      result = inputValue / 2.628e6;
    } else if (outputUnit === "years") {
      result = inputValue / 3.154e7;
    }
  } else if (inputUnit === "min") {
    if (outputUnit === "ns") {
      result = inputValue * 6e10;
    } else if (outputUnit === "mcs") {
      result = inputValue * 6e7;
    } else if (outputUnit === "ms") {
      result = inputValue * 60000;
    } else if (outputUnit === "sec") {
      result = inputValue * 60;
    } else if (outputUnit === "hr") {
      result = inputValue / 60;
    } else if (outputUnit === "days") {
      result = inputValue / 1440;
    } else if (outputUnit === "mon") {
      result = inputValue / 4.32e4;
    } else if (outputUnit === "years") {
      result = inputValue / 5.256e5;
    }
  } else if (inputUnit === "hr") {
    if (outputUnit === "ns") {
      result = inputValue * 3.6e12;
    } else if (outputUnit === "mcs") {
      result = inputValue * 3.6e9;
    } else if (outputUnit === "ms") {
      result = inputValue * 3.6e6;
    } else if (outputUnit === "sec") {
      result = inputValue * 3600;
    } else if (outputUnit === "min") {
      result = inputValue * 60;
    } else if (outputUnit === "days") {
      result = inputValue / 24;
    } else if (outputUnit === "mon") {
      result = inputValue / 720;
    } else if (outputUnit === "years") {
      result = inputValue / 8760;
    }
  } else if (inputUnit === "days") {
    if (outputUnit === "ns") {
      result = inputValue * 8.64e13;
    } else if (outputUnit === "mcs") {
      result = inputValue * 8.64e10;
    } else if (outputUnit === "ms") {
      result = inputValue * 8.64e7;
    } else if (outputUnit === "sec") {
      result = inputValue * 86400;
    } else if (outputUnit === "min") {
      result = inputValue * 1440;
    } else if (outputUnit === "hr") {
      result = inputValue * 24;
    } else if (outputUnit === "mon") {
      result = inputValue / 30.417;
    } else if (outputUnit === "years") {
      result = inputValue / 365;
    }
  } else if (inputUnit === "mon") {
    if (outputUnit === "ns") {
      result = inputValue * 2.628e15;
    } else if (outputUnit === "mcs") {
      result = inputValue * 2.628e12;
    } else if (outputUnit === "ms") {
      result = inputValue * 2.628e9;
    } else if (outputUnit === "sec") {
      result = inputValue * 2.628e6;
    } else if (outputUnit === "min") {
      result = inputValue * 43800;
    } else if (outputUnit === "hr") {
      result = inputValue * 730;
    } else if (outputUnit === "days") {
      result = inputValue * 30.417;
    } else if (outputUnit === "years") {
      result = inputValue / 12;
    }
  } else if (inputUnit === "years") {
    if (outputUnit === "ns") {
      result = inputValue * 3.154e16;
    } else if (outputUnit === "mcs") {
      result = inputValue * 3.154e13;
    } else if (outputUnit === "ms") {
      result = inputValue * 3.154e10;
    } else if (outputUnit === "sec") {
      result = inputValue * 3.154e7;
    } else if (outputUnit === "min") {
      result = inputValue * 525600;
    } else if (outputUnit === "hr") {
      result = inputValue * 8760;
    } else if (outputUnit === "days") {
      result = inputValue * 365;
    } else if (outputUnit === "mon") {
      result = inputValue * 12;
    }
  }

  // conversion formula for Weights

  if (inputUnit === "kg") {
    if (outputUnit === "g") {
      result = inputValue * 1000;
    } else if (outputUnit === "mg") {
      result = inputValue * 1000000;
    } else if (outputUnit === "mt") {
      result = inputValue / 1000;
    } else if (outputUnit === "ou") {
      result = inputValue * 35.274;
    } else if (outputUnit === "ca") {
      result = inputValue * 5000;
    } else if (outputUnit === "lb") {
      result = inputValue * 2.20462;
    }
  } else if (inputUnit === "g") {
    if (outputUnit === "kg") {
      result = inputValue / 1000;
    } else if (outputUnit === "mg") {
      result = inputValue * 1000;
    } else if (outputUnit === "mt") {
      result = inputValue / 1000000;
    } else if (outputUnit === "ou") {
      result = inputValue * 0.035274;
    } else if (outputUnit === "ca") {
      result = inputValue * 5;
    } else if (outputUnit === "lb") {
      result = inputValue * 0.00220462;
    }
  } else if (inputUnit === "mg") {
    if (outputUnit === "kg") {
      result = inputValue / 1000000;
    } else if (outputUnit === "g") {
      result = inputValue / 1000;
    } else if (outputUnit === "mt") {
      result = inputValue / 1000000000;
    } else if (outputUnit === "ou") {
      result = inputValue * 0.000035274;
    } else if (outputUnit === "ca") {
      result = inputValue * 0.005;
    } else if (outputUnit === "lb") {
      result = inputValue * 0.00000220462;
    }
  } else if (inputUnit === "mt") {
    if (outputUnit === "kg") {
      result = inputValue * 1000;
    } else if (outputUnit === "g") {
      result = inputValue * 1000000;
    } else if (outputUnit === "mg") {
      result = inputValue * 1000000000;
    } else if (outputUnit === "ou") {
      result = inputValue * 35274;
    } else if (outputUnit === "ca") {
      result = inputValue * 5000000;
    } else if (outputUnit === "lb") {
      result = inputValue * 2204.62;
    }
  } else if (inputUnit === "ou") {
    if (outputUnit === "kg") {
      result = inputValue * 0.0283495;
    } else if (outputUnit === "g") {
      result = inputValue * 28.3495;
    } else if (outputUnit === "mg") {
      result = inputValue * 28349.5;
    } else if (outputUnit === "mt") {
      result = inputValue / 35274;
    } else if (outputUnit === "ca") {
      result = inputValue * 141.7475;
    } else if (outputUnit === "lb") {
      result = inputValue * 0.0625;
    }
  } else if (inputUnit === "ca") {
    if (outputUnit === "kg") {
      result = inputValue * 0.0002;
    } else if (outputUnit === "g") {
      result = inputValue * 0.2;
    } else if (outputUnit === "mg") {
      result = inputValue * 200;
    } else if (outputUnit === "mt") {
      result = inputValue / 5000000;
    } else if (outputUnit === "ou") {
      result = inputValue * 0.00705479;
    } else if (outputUnit === "lb") {
      result = inputValue * 0.000440925;
    }
  } else if (inputUnit === "lb") {
    if (outputUnit === "kg") {
      result = inputValue * 0.453592;
    } else if (outputUnit === "g") {
      result = inputValue * 453.592;
    } else if (outputUnit === "mg") {
      result = inputValue * 453592;
    } else if (outputUnit === "mt") {
      result = inputValue / 2204.62;
    } else if (outputUnit === "ou") {
      result = inputValue * 16;
    } else if (outputUnit === "ca") {
      result = inputValue * 2267.96;
    }
  }
  // conversion formula Volume

  if (inputUnit === "cbm") {
    if (outputUnit === "cbkm") {
      result = inputValue / 1e9;
    } else if (outputUnit === "cbcm") {
      result = inputValue * 1e6;
    } else if (outputUnit === "cbmm") {
      result = inputValue * 1e9;
    } else if (outputUnit === "l") {
      result = inputValue * 1000;
    } else if (outputUnit === "ml") {
      result = inputValue * 1e6;
    } else if (outputUnit === "gal") {
      result = inputValue * 264.172;
    }
  } else if (inputUnit === "cbkm") {
    if (outputUnit === "cbm") {
      result = inputValue * 1e9;
    } else if (outputUnit === "cbcm") {
      result = inputValue * 1e15;
    } else if (outputUnit === "cbmm") {
      result = inputValue * 1e18;
    } else if (outputUnit === "l") {
      result = inputValue * 1e12;
    } else if (outputUnit === "ml") {
      result = inputValue * 1e15;
    } else if (outputUnit === "gal") {
      result = inputValue * 2.64172e11;
    }
  } else if (inputUnit === "cbcm") {
    if (outputUnit === "cbm") {
      result = inputValue / 1e6;
    } else if (outputUnit === "cbkm") {
      result = inputValue / 1e15;
    } else if (outputUnit === "cbmm") {
      result = inputValue * 1e3;
    } else if (outputUnit === "l") {
      result = inputValue / 1e3;
    } else if (outputUnit === "ml") {
      result = inputValue;
    } else if (outputUnit === "gal") {
      result = inputValue / 3785.41;
    }
  } else if (inputUnit === "cbmm") {
    if (outputUnit === "cbm") {
      result = inputValue / 1e9;
    } else if (outputUnit === "cbkm") {
      result = inputValue / 1e18;
    } else if (outputUnit === "cbcm") {
      result = inputValue / 1e3;
    } else if (outputUnit === "l") {
      result = inputValue / 1e6;
    } else if (outputUnit === "ml") {
      result = inputValue / 1e3;
    } else if (outputUnit === "gal") {
      result = inputValue / 3.78541e6;
    }
  } else if (inputUnit === "l") {
    if (outputUnit === "cbm") {
      result = inputValue / 1000;
    } else if (outputUnit === "cbkm") {
      result = inputValue / 1e12;
    } else if (outputUnit === "cbcm") {
      result = inputValue * 1000;
    } else if (outputUnit === "cbmm") {
      result = inputValue * 1e6;
    } else if (outputUnit === "ml") {
      result = inputValue * 1000;
    } else if (outputUnit === "gal") {
      result = inputValue / 3.78541;
    }
  } else if (inputUnit === "ml") {
    if (outputUnit === "cbm") {
      result = inputValue / 1e6;
    } else if (outputUnit === "cbkm") {
      result = inputValue / 1e15;
    } else if (outputUnit === "cbcm") {
      result = inputValue;
    } else if (outputUnit === "cbmm") {
      result = inputValue * 1e3;
    } else if (outputUnit === "l") {
      result = inputValue / 1000;
    } else if (outputUnit === "gal") {
      result = inputValue / 3785.41e3;
    }
  } else if (inputUnit === "gal") {
    if (outputUnit === "cbm") {
      result = inputValue / 264.172;
    } else if (outputUnit === "cbkm") {
      result = inputValue / 2.64172e11;
    } else if (outputUnit === "cbcm") {
      result = inputValue * 3785.41;
    } else if (outputUnit === "cbmm") {
      result = inputValue * 3.78541e6;
    } else if (outputUnit === "l") {
      result = inputValue * 3.78541;
    } else if (outputUnit === "ml") {
      result = inputValue * 3785.41e3;
    }
  }

  document.getElementById("result").innerHTML = result.toFixed(2);
}
