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

  var jobTitle = element(by.id('job_title'));
  var salary = element(by.id('salary'));
  var contractType = element(by.id('contractType'));

  const nextButtonPersonalInfoPart = element(by.id('nextButtonPersonalInfoPart'));
  const nextButtonAddressPart = element(by.id('nextButtonAddressPart'));
  const nextButtonContactInfoPart = element(by.id('nextButtonContactInfoPart'));
  const submitButton = element(by.id('submitButton'))

  beforeEach(function(){
    browser.get('http://localhost:4200/employees-form')
  });

  it('should create new employee', function () {
    // PERSONAL DATA PART
    firstName.sendKeys('TestFirstName');
    lastName.sendKeys('TestLastName');
    // dateOfBirth.sendKeys('01011991'); TODO: Fix it
    // TODO: Add Gender test here
    //This should initialize next step of accordion
    nextButtonPersonalInfoPart.click();

    // ADDRESS PART
    country.sendKeys('TestCountry'); //TODO: Refactor it when country list will be added
    city.sendKeys('TestCity');
    street.sendKeys('TestAddress');
    postCode.sendKeys('11-111');

    //This should initialize next step of accordion
    nextButtonAddressPart.click();

    // CONTACT INFO PART
    privateEmailAddress.sendKeys('TestEmail@eo.pl');
    contactNumber.sendKeys('+48 123456789');
    alternateContactNumber.sendKeys('+48 987654321');

    //This should initialize next step of accordion
    nextButtonContactInfoPart.click();

   // JOB SPECIFIC INFO PART
   //  TODO: Add Job title test
salary.sendKeys('9000');
// TODO: ADD CONTRACT TYPE TEST

    //This should submit Employee data to backend and database
    // submitButton.click(); TODO: Unlock when test will be ready

  });
});
