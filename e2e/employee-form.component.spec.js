describe('Employee Form Test', function () {
  var firstName = element(by.id('first_name'));
  var lastName = element(by.id('last_name'));
  var dateOfBirth = element(by.id('dateOfBirth'));
  var gender = element(by.id('gender'));

  var country = element(by.id('country'));
  var city = element(by.id('city'));
  var street = element(by.id('street'));
  var postCode = element(by.id('post_code'));

  var privateEmailAddress = element(by.id('privateEMail'));
  var contactNumber = element(by.id('contact_number'));
  var alternateContactNumber = element(by.id('alternate_contact_number'));

  var jobTitle = element(by.id('jobTitle'));
  var salary = element(by.id('salary'));
  var contractType = element(by.id('contractType'));

  const personalDataAccordionPanel = element(by.id('personalDataAccordionPanel'));
  const addressAccordionPanel = element(by.id('addressAccordionPanel'));
  const contactInfoAccordionPanel = element(by.id('contactInfoAccordionPanel'));
  const jobSpecificInfoAccordionPanel = element(by.id('jobSpecificInfoAccordionPanel'));
  const submitButton = element(by.id('submitButton'));

  beforeEach(function () {
    browser.get('http://localhost:4200/employees-form')
  });

  it('should create new employee', function () {
    // PERSONAL DATA PART
    firstName.sendKeys('TestFirstName');
    lastName.sendKeys('TestLastName');
    dateOfBirth.sendKeys('01/01/1991');

    // GENDER SELECTOR BLOCK
    gender.click();
    browser.sleep(500);
    element(by.cssContainingText('mat-option', 'OTHER')).click();
    // $$('mat-option').get(2).click(); //By index
    browser.sleep(500);
    // /GENDER SELECTOR BLOCK

    //This should initialize next step of accordion
    addressAccordionPanel.click();

    // ADDRESS PART
    country.sendKeys('TestCountry'); //TODO: Refactor it when country list will be added
    city.sendKeys('TestCity');
    street.sendKeys('TestAddress');
    postCode.sendKeys('11-111');

    //This should initialize next step of accordion
    contactInfoAccordionPanel.click();

    // CONTACT INFO PART
    privateEmailAddress.sendKeys('TestEmail@eo.pl');
    contactNumber.sendKeys('123456789');
    alternateContactNumber.sendKeys('987654321');

    //This should initialize next step of accordion
    jobSpecificInfoAccordionPanel.click();

    // JOB SPECIFIC INFO PART

    // JOB TITLE BLOCK
    jobTitle.click();
    browser.sleep(500);
    element(by.cssContainingText('mat-option', 'OTHER')).click(); //By visible string
    // $$('mat-option').get(2).click(); //By index
    browser.sleep(500);
    // /JOB TITLE BLOCK

    salary.sendKeys('9000');

    // CONTRACT TYPE BLOCK
    contractType.click();
    browser.sleep(500);
    element(by.cssContainingText('mat-option', 'A')).click(); //By visible string
    // $$('mat-option').get(2).click(); //By index
    browser.sleep(500);
    // /CONTRACT TYPE BLOCK

    //This should submit Employee data to backend and database
    submitButton.click();
    browser.sleep(5000000);

  });
});
