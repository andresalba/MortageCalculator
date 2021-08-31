(() => {
  /**
  * Get access to te elements
  */
  const slider1 = document.getElementById('slider1');
  const output1 = document.getElementById('value1');
  const slider2 = document.getElementById('slider2');
  const output2 = document.getElementById('value2');
  const calculateButton = document.getElementById('calculate');
  const loanInput = document.getElementById('loanInput');
  const taxInput = document.getElementById('taxInput');
  const insuranceInput = document.getElementById('insuranceInput');
  const prinOutput = document.getElementById('prinOutput');
  const taxOutput = document.getElementById('taxOutput');
  const insuranceOutput = document.getElementById('insuranceOutput');
  const monthlyOutput = document.getElementById('monthlyOutput');
  const mf1 = document.getElementById('mf1');
  const mf2 = document.getElementById('mf2');
  const mf3 = document.getElementById('mf3');
  let years;
  let interest;



  /**
  * Captures the slider value and calculates the amount of blue in the slider's background
  */
  function slider1Event() {
    years = slider1.value;
    output1.innerHTML = slider1.value;
    const y = (100 * years) / 40;
    slider1.style.background = 'linear-gradient(90deg, rgb(27, 57, 121)' + y + '%, rgb(221, 221, 221)' + y + '%)';
  }

  /**
  * Captures the slider value and calculates the amount of blue in the slider's background
  */
  function slider2Event() {
    interest = slider2.value;
    output2.innerHTML = slider2.value;
    const y = (100 * interest) / 10;
    slider2.style.background = 'linear-gradient(90deg, rgb(27, 57, 121)' + y + '%, rgb(221, 221, 221)' + y + '%)';
  }

  /**
  * Initialize the Mandatory field texts as display none
  */
  mf1.style.display = 'none';
  mf2.style.display = 'none';
  mf3.style.display = 'none';
  slider1Event();
  slider2Event();
  slider1.addEventListener('input', slider1Event);
  slider2.addEventListener('input', slider2Event);
  calculateButton.addEventListener('click', requestCalculation);

  /**
  * Analyzes if the user has filled in the spaces with information
  * and outputs the Mandatory field message in red if he has not done so
  * @param {number} loan - The Loan Amount wrote by the user
  * @param {number} annualTax - The Annual tax wrote by the user
  * @param {number} annualInsur - The Annual Insurance wrote by the user
  * @returns {boolean} returns true or false according to the empthy inputs
  */
  function validateForm(loan, annualTax, annualInsur) {
    let valid = true;
    if (loan !== '') {
      loanInput.style.borderColor = '#cccccc';
      mf1.style.display = 'none';
    } else {
      loanInput.style.borderColor = 'red';
      mf1.style.display = 'block';
      valid = false;
    }
    if (annualTax !== '') {
      taxInput.style.borderColor = '#cccccc';
      mf2.style.display = 'none';
    } else {
      taxInput.style.borderColor = 'red';
      mf2.style.display = 'block';
      valid = false;
    }
    if (annualInsur !== '') {
      insuranceInput.style.borderColor = '#cccccc';
      mf3.style.display = 'none';
    } else {
      insuranceInput.style.borderColor = 'red';
      mf3.style.display = 'block';
      valid = false;
    }
    return valid;
  }

  /**
  * Apply the mathematical formulas
  * @param {number} loan - The Loan Amount wrote by the user
  * @param {number} annualTax - The Annual tax wrote by the user
  * @param {number} annualInsur - The Annual Insurance wrote by the user
  * @returns {number} returns te requested values
  */
  function calculate(loan, annualTax, annualInsur) {
  // principle interest calculation
    const calcPi = ((interest / 100) / 12) * loan / (1 - Math.pow((1 + ((interest / 100) / 12)), -years * 12));
    // tax calculation
    const calcTax = annualTax / 12;
    // insurance calculation
    const calcInsur = annualInsur / 12;
    // error if empty
    return {
      calcPi,
      calcTax,
      calcInsur,
      calcMonth: calcPi + calcTax + calcInsur
    };
  }

  /**
  * Prints in screen the results of the calculations
  */
  function requestCalculation() {
    const loan = loanInput.value;
    const annualTax = taxInput.value;
    const annualInsur = insuranceInput.value;
    if (validateForm(loan, annualTax, annualInsur)) {
      const { calcPi, calcTax, calcInsur, calcMonth } = calculate(loan, annualTax, annualInsur);
      prinOutput.innerHTML = calcPi.toFixed(2);
      taxOutput.innerHTML = calcTax.toFixed(2);
      insuranceOutput.innerHTML = calcInsur.toFixed(2);
      monthlyOutput.innerHTML = calcMonth.toFixed(2);
    }
  }

  window.mCalc = {
    calculate
  };
})();
