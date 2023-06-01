<template>
  <form action="">
    <div class="section1" v-if="activePhase == 1">
      <h3>Enter your company information</h3>
      <section>
        <span>STEP 1 OF 3</span>
        <input
          type="text"
          name="CompName"
          v-model="company.name"
          placeholder="Company name"
          required="required"
        />
        <input
          type="text"
          v-model="company.city"
          placeholder="City"
          required="required"
        />
        <input
          type="text"
          v-model="company.zipCode"
          placeholder="Zip/postal code"
          required="required"
        />
        <select v-model="company.country" name="company[country]">
          <option value="" disabled selected>Country/Region</option>
          <option value="AF">Afghanistan</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AD">Andorra</option>
          <option value="AO">Angola</option>
          <option value="AI">Anguilla</option>
          <option value="AG">Antigua & Barbuda</option>
          <option value="AR">Argentina</option>
          <option value="AM">Armenia</option>
          <option value="AW">Aruba</option>
          <option value="AC">Ascension Island</option>
          <option value="AU">Australia</option>
          <option value="AT">Austria</option>
          <option value="AZ">Azerbaijan</option>
          <option value="BS">Bahamas</option>
          <option value="BH">Bahrain</option>
          <option value="BD">Bangladesh</option>
          <option value="BB">Barbados</option>
          <option value="BY">Belarus</option>
          <option value="BE">Belgium</option>
          <option value="BZ">Belize</option>
          <option value="BJ">Benin</option>
          <option value="BM">Bermuda</option>
          <option value="BT">Bhutan</option>
          <option value="BO">Bolivia</option>
          <option value="BA">Bosnia & Herzegovina</option>
          <option value="BW">Botswana</option>
          <option value="BR">Brazil</option>
          <option value="IO">British Indian Ocean Territory</option>
          <option value="VG">British Virgin Islands</option>
          <option value="BN">Brunei</option>
          <option value="BG">Bulgaria</option>
          <option value="BF">Burkina Faso</option>
          <option value="BI">Burundi</option>
          <option value="KH">Cambodia</option>
          <option value="CM">Cameroon</option>
          <option value="CA">Canada</option>
          <option value="CV">Cape Verde</option>
          <option value="BQ">Caribbean Netherlands</option>
          <option value="KY">Cayman Islands</option>
          <option value="CF">Central African Republic</option>
          <option value="TD">Chad</option>
          <option value="CL">Chile</option>
          <option value="CN">China</option>
          <option value="CX">Christmas Island</option>
          <option value="CC">Cocos (Keeling) Islands</option>
          <option value="CO">Colombia</option>
          <option value="KM">Comoros</option>
          <option value="CG">Congo - Brazzaville</option>
          <option value="CD">Congo - Kinshasa</option>
          <option value="CK">Cook Islands</option>
          <option value="CR">Costa Rica</option>
          <option value="HR">Croatia</option>
          <option value="CW">Curaçao</option>
          <option value="CY">Cyprus</option>
          <option value="CZ">Czechia</option>
          <option value="CI">Côte d’Ivoire</option>
          <option value="DK">Denmark</option>
          <option value="DJ">Djibouti</option>
          <option value="DM">Dominica</option>
          <option value="DO">Dominican Republic</option>
          <option value="EC">Ecuador</option>
          <option value="EG">Egypt</option>
          <option value="SV">El Salvador</option>
          <option value="GQ">Equatorial Guinea</option>
          <option value="ER">Eritrea</option>
          <option value="EE">Estonia</option>
          <option value="SZ">Eswatini</option>
          <option value="ET">Ethiopia</option>
          <option value="FK">Falkland Islands</option>
          <option value="FO">Faroe Islands</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GF">French Guiana</option>
          <option value="PF">French Polynesia</option>
          <option value="TF">French Southern Territories</option>
          <option value="GA">Gabon</option>
          <option value="GM">Gambia</option>
          <option value="GE">Georgia</option>
          <option value="DE">Germany</option>
          <option value="GH">Ghana</option>
          <option value="GI">Gibraltar</option>
          <option value="GR">Greece</option>
          <option value="GL">Greenland</option>
          <option value="GD">Grenada</option>
          <option value="GP">Guadeloupe</option>
          <option value="GT">Guatemala</option>
          <option value="GG">Guernsey</option>
          <option value="GN">Guinea</option>
          <option value="GW">Guinea-Bissau</option>
          <option value="GY">Guyana</option>
          <option value="HT">Haiti</option>
          <option value="HN">Honduras</option>
          <option value="HK">Hong Kong SAR</option>
          <option value="HU">Hungary</option>
          <option value="IS">Iceland</option>
          <option value="IN">India</option>
          <option value="ID">Indonesia</option>
          <option value="IQ">Iraq</option>
          <option value="IE">Ireland</option>
          <option value="IM">Isle of Man</option>
          <option value="IL">Israel</option>
          <option value="IT">Italy</option>
          <option value="JM">Jamaica</option>
          <option value="JP">Japan</option>
          <option value="JE">Jersey</option>
          <option value="JO">Jordan</option>
          <option value="KZ">Kazakhstan</option>
          <option value="KE">Kenya</option>
          <option value="KI">Kiribati</option>
          <option value="XK">Kosovo</option>
          <option value="KW">Kuwait</option>
          <option value="KG">Kyrgyzstan</option>
          <option value="LA">Laos</option>
          <option value="LV">Latvia</option>
          <option value="LB">Lebanon</option>
          <option value="LS">Lesotho</option>
          <option value="LR">Liberia</option>
          <option value="LY">Libya</option>
          <option value="LI">Liechtenstein</option>
          <option value="LT">Lithuania</option>
          <option value="LU">Luxembourg</option>
          <option value="MO">Macao SAR</option>
          <option value="MG">Madagascar</option>
          <option value="MW">Malawi</option>
          <option value="MY">Malaysia</option>
          <option value="MV">Maldives</option>
          <option value="ML">Mali</option>
          <option value="MT">Malta</option>
          <option value="MQ">Martinique</option>
          <option value="MR">Mauritania</option>
          <option value="MU">Mauritius</option>
          <option value="YT">Mayotte</option>
          <option value="MX">Mexico</option>
          <option value="MD">Moldova</option>
          <option value="MC">Monaco</option>
          <option value="MN">Mongolia</option>
          <option value="ME">Montenegro</option>
          <option value="MS">Montserrat</option>
          <option value="MA">Morocco</option>
          <option value="MZ">Mozambique</option>
          <option value="MM">Myanmar (Burma)</option>
          <option value="NA">Namibia</option>
          <option value="NR">Nauru</option>
          <option value="NP">Nepal</option>
          <option value="NL">Netherlands</option>
          <option value="NC">New Caledonia</option>
          <option value="NZ">New Zealand</option>
          <option value="NI">Nicaragua</option>
          <option value="NE">Niger</option>
          <option value="NG">Nigeria</option>
          <option value="NU">Niue</option>
          <option value="NF">Norfolk Island</option>
          <option value="MK">North Macedonia</option>
          <option value="NO">Norway</option>
          <option value="OM">Oman</option>
          <option value="PK">Pakistan</option>
          <option value="PS">Palestinian Territories</option>
          <option value="PA">Panama</option>
          <option value="PG">Papua New Guinea</option>
          <option value="PY">Paraguay</option>
          <option value="PE">Peru</option>
          <option value="PH">Philippines</option>
          <option value="PN">Pitcairn Islands</option>
          <option value="PL">Poland</option>
          <option value="PT">Portugal</option>
          <option value="QA">Qatar</option>
          <option value="RO">Romania</option>
          <option value="RU">Russia</option>
          <option value="RW">Rwanda</option>
          <option value="RE">Réunion</option>
          <option value="WS">Samoa</option>
          <option value="SM">San Marino</option>
          <option value="SA">Saudi Arabia</option>
          <option value="SN">Senegal</option>
          <option value="RS">Serbia</option>
          <option value="SC">Seychelles</option>
          <option value="SL">Sierra Leone</option>
          <option value="SG">Singapore</option>
          <option value="SX">Sint Maarten</option>
          <option value="SK">Slovakia</option>
          <option value="SI">Slovenia</option>
          <option value="SB">Solomon Islands</option>
          <option value="SO">Somalia</option>
          <option value="ZA">South Africa</option>
          <option value="GS">South Georgia & South Sandwich Islands</option>
          <option value="KR">South Korea</option>
          <option value="SS">South Sudan</option>
          <option value="ES">Spain</option>
          <option value="LK">Sri Lanka</option>
          <option value="BL">St. Barthélemy</option>
          <option value="SH">St. Helena</option>
          <option value="KN">St. Kitts & Nevis</option>
          <option value="LC">St. Lucia</option>
          <option value="MF">St. Martin</option>
          <option value="PM">St. Pierre & Miquelon</option>
          <option value="VC">St. Vincent & Grenadines</option>
          <option value="SD">Sudan</option>
          <option value="SR">Suriname</option>
          <option value="SJ">Svalbard & Jan Mayen</option>
          <option value="SE">Sweden</option>
          <option value="CH">Switzerland</option>
          <option value="ST">São Tomé & Príncipe</option>
          <option value="TW">Taiwan</option>
          <option value="TJ">Tajikistan</option>
          <option value="TZ">Tanzania</option>
          <option value="TH">Thailand</option>
          <option value="TL">Timor-Leste</option>
          <option value="TG">Togo</option>
          <option value="TK">Tokelau</option>
          <option value="TO">Tonga</option>
          <option value="TT">Trinidad & Tobago</option>
          <option value="TA">Tristan da Cunha</option>
          <option value="TN">Tunisia</option>
          <option value="TR">Turkey</option>
          <option value="TM">Turkmenistan</option>
          <option value="TC">Turks & Caicos Islands</option>
          <option value="TV">Tuvalu</option>
          <option value="UM">U.S. Outlying Islands</option>
          <option value="UG">Uganda</option>
          <option value="UA">Ukraine</option>
          <option value="AE">United Arab Emirates</option>
          <option value="GB">United Kingdom</option>
          <option selected="selected" value="US">United States</option>
          <option value="UY">Uruguay</option>
          <option value="UZ">Uzbekistan</option>
          <option value="VU">Vanuatu</option>
          <option value="VA">Vatican City</option>
          <option value="VE">Venezuela</option>
          <option value="VN">Vietnam</option>
          <option value="WF">Wallis & Futuna</option>
          <option value="EH">Western Sahara</option>
          <option value="YE">Yemen</option>
          <option value="ZM">Zambia</option>
          <option value="ZW">Zimbabwe</option>
          <option value="AX">Åland Islands</option>
        </select>
        <input type="text" v-model="company.state" placeholder="State/Province">
        <button
          type="button"
          style="margin: 0 0 0 auto; display: block"
          @click.prevent="goToStep(2)"
        >
          Next
        </button>
      </section>
    </div>
    <div class="section2" v-if="activePhase == 2" >
      <h3>Enter customer and invoice information</h3>
      <section>
        <span>STEP 2 OF 3</span>
        <div id="xmas-popup" class="popup" href="#">
	            <div class="popup-content">
	                <input type="text" name="name" placeholder="Name">
                  <input type="text" name="email" placeholder="Email">
                  <input type="text" name="country" placeholder="Country">
                  <input type="text" name="city" placeholder="City">
                  <button style="margin-left: 90%;" type="button">Add</button>
	                <a onclick="this.parentElement.parentElement.style.display='none';" class="close"><i class="fa-solid fa-xmark"></i></a>
	            </div>
	        </div>
          <div style="position: relative;">
            <input id="CustomerName" type="text" list="Customer" v-model="customer.name" placeholder="Customer Name"/>
            <span @click="openPopup(2)" class="add">+</span>
          </div>
        <datalist id="Customer">
          <option v-for="Customer in customerFromShopify" :key="Customer.id">
            {{ Customer.first_name + " " + Customer.last_name }}
          </option>
        </datalist>
        <input
          type="text"
          list="CustomerEmail"
          v-model="customer.email"
          name=""
          placeholder="Your customer's email"
        />
        <datalist id="CustomerEmail">
          <option v-for="Customer in customerFromShopify" :key="Customer.id">{{ Customer.email }}</option>
        </datalist>
        <input
          type="text"
          v-model="customer.invoiceNumber"
          name=""
          placeholder="Invoice number"
        />
        <input
          type="text"
          v-model="customer.address"
          name=""
          placeholder="Customer's address"
        />
        <input
          type="date"
          v-model="customer.date"
          name=""
          placeholder="Invoice date"
        />
        <input type="text" v-model="customer.city" name="" placeholder="City" />
        <input
          type="text"
          v-model="customer.zipCode"
          name=""
          placeholder="Zip/postal code"
        />
        <select v-model="customer.country" name="company[country]">
          <option value="" disabled selected>Country/Region</option>
          <option value="AF">Afghanistan</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AD">Andorra</option>
          <option value="AO">Angola</option>
          <option value="AI">Anguilla</option>
          <option value="AG">Antigua & Barbuda</option>
          <option value="AR">Argentina</option>
          <option value="AM">Armenia</option>
          <option value="AW">Aruba</option>
          <option value="AC">Ascension Island</option>
          <option value="AU">Australia</option>
          <option value="AT">Austria</option>
          <option value="AZ">Azerbaijan</option>
          <option value="BS">Bahamas</option>
          <option value="BH">Bahrain</option>
          <option value="BD">Bangladesh</option>
          <option value="BB">Barbados</option>
          <option value="BY">Belarus</option>
          <option value="BE">Belgium</option>
          <option value="BZ">Belize</option>
          <option value="BJ">Benin</option>
          <option value="BM">Bermuda</option>
          <option value="BT">Bhutan</option>
          <option value="BO">Bolivia</option>
          <option value="BA">Bosnia & Herzegovina</option>
          <option value="BW">Botswana</option>
          <option value="BR">Brazil</option>
          <option value="IO">British Indian Ocean Territory</option>
          <option value="VG">British Virgin Islands</option>
          <option value="BN">Brunei</option>
          <option value="BG">Bulgaria</option>
          <option value="BF">Burkina Faso</option>
          <option value="BI">Burundi</option>
          <option value="KH">Cambodia</option>
          <option value="CM">Cameroon</option>
          <option value="CA">Canada</option>
          <option value="CV">Cape Verde</option>
          <option value="BQ">Caribbean Netherlands</option>
          <option value="KY">Cayman Islands</option>
          <option value="CF">Central African Republic</option>
          <option value="TD">Chad</option>
          <option value="CL">Chile</option>
          <option value="CN">China</option>
          <option value="CX">Christmas Island</option>
          <option value="CC">Cocos (Keeling) Islands</option>
          <option value="CO">Colombia</option>
          <option value="KM">Comoros</option>
          <option value="CG">Congo - Brazzaville</option>
          <option value="CD">Congo - Kinshasa</option>
          <option value="CK">Cook Islands</option>
          <option value="CR">Costa Rica</option>
          <option value="HR">Croatia</option>
          <option value="CW">Curaçao</option>
          <option value="CY">Cyprus</option>
          <option value="CZ">Czechia</option>
          <option value="CI">Côte d’Ivoire</option>
          <option value="DK">Denmark</option>
          <option value="DJ">Djibouti</option>
          <option value="DM">Dominica</option>
          <option value="DO">Dominican Republic</option>
          <option value="EC">Ecuador</option>
          <option value="EG">Egypt</option>
          <option value="SV">El Salvador</option>
          <option value="GQ">Equatorial Guinea</option>
          <option value="ER">Eritrea</option>
          <option value="EE">Estonia</option>
          <option value="SZ">Eswatini</option>
          <option value="ET">Ethiopia</option>
          <option value="FK">Falkland Islands</option>
          <option value="FO">Faroe Islands</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GF">French Guiana</option>
          <option value="PF">French Polynesia</option>
          <option value="TF">French Southern Territories</option>
          <option value="GA">Gabon</option>
          <option value="GM">Gambia</option>
          <option value="GE">Georgia</option>
          <option value="DE">Germany</option>
          <option value="GH">Ghana</option>
          <option value="GI">Gibraltar</option>
          <option value="GR">Greece</option>
          <option value="GL">Greenland</option>
          <option value="GD">Grenada</option>
          <option value="GP">Guadeloupe</option>
          <option value="GT">Guatemala</option>
          <option value="GG">Guernsey</option>
          <option value="GN">Guinea</option>
          <option value="GW">Guinea-Bissau</option>
          <option value="GY">Guyana</option>
          <option value="HT">Haiti</option>
          <option value="HN">Honduras</option>
          <option value="HK">Hong Kong SAR</option>
          <option value="HU">Hungary</option>
          <option value="IS">Iceland</option>
          <option value="IN">India</option>
          <option value="ID">Indonesia</option>
          <option value="IQ">Iraq</option>
          <option value="IE">Ireland</option>
          <option value="IM">Isle of Man</option>
          <option value="IL">Israel</option>
          <option value="IT">Italy</option>
          <option value="JM">Jamaica</option>
          <option value="JP">Japan</option>
          <option value="JE">Jersey</option>
          <option value="JO">Jordan</option>
          <option value="KZ">Kazakhstan</option>
          <option value="KE">Kenya</option>
          <option value="KI">Kiribati</option>
          <option value="XK">Kosovo</option>
          <option value="KW">Kuwait</option>
          <option value="KG">Kyrgyzstan</option>
          <option value="LA">Laos</option>
          <option value="LV">Latvia</option>
          <option value="LB">Lebanon</option>
          <option value="LS">Lesotho</option>
          <option value="LR">Liberia</option>
          <option value="LY">Libya</option>
          <option value="LI">Liechtenstein</option>
          <option value="LT">Lithuania</option>
          <option value="LU">Luxembourg</option>
          <option value="MO">Macao SAR</option>
          <option value="MG">Madagascar</option>
          <option value="MW">Malawi</option>
          <option value="MY">Malaysia</option>
          <option value="MV">Maldives</option>
          <option value="ML">Mali</option>
          <option value="MT">Malta</option>
          <option value="MQ">Martinique</option>
          <option value="MR">Mauritania</option>
          <option value="MU">Mauritius</option>
          <option value="YT">Mayotte</option>
          <option value="MX">Mexico</option>
          <option value="MD">Moldova</option>
          <option value="MC">Monaco</option>
          <option value="MN">Mongolia</option>
          <option value="ME">Montenegro</option>
          <option value="MS">Montserrat</option>
          <option value="MA">Morocco</option>
          <option value="MZ">Mozambique</option>
          <option value="MM">Myanmar (Burma)</option>
          <option value="NA">Namibia</option>
          <option value="NR">Nauru</option>
          <option value="NP">Nepal</option>
          <option value="NL">Netherlands</option>
          <option value="NC">New Caledonia</option>
          <option value="NZ">New Zealand</option>
          <option value="NI">Nicaragua</option>
          <option value="NE">Niger</option>
          <option value="NG">Nigeria</option>
          <option value="NU">Niue</option>
          <option value="NF">Norfolk Island</option>
          <option value="MK">North Macedonia</option>
          <option value="NO">Norway</option>
          <option value="OM">Oman</option>
          <option value="PK">Pakistan</option>
          <option value="PS">Palestinian Territories</option>
          <option value="PA">Panama</option>
          <option value="PG">Papua New Guinea</option>
          <option value="PY">Paraguay</option>
          <option value="PE">Peru</option>
          <option value="PH">Philippines</option>
          <option value="PN">Pitcairn Islands</option>
          <option value="PL">Poland</option>
          <option value="PT">Portugal</option>
          <option value="QA">Qatar</option>
          <option value="RO">Romania</option>
          <option value="RU">Russia</option>
          <option value="RW">Rwanda</option>
          <option value="RE">Réunion</option>
          <option value="WS">Samoa</option>
          <option value="SM">San Marino</option>
          <option value="SA">Saudi Arabia</option>
          <option value="SN">Senegal</option>
          <option value="RS">Serbia</option>
          <option value="SC">Seychelles</option>
          <option value="SL">Sierra Leone</option>
          <option value="SG">Singapore</option>
          <option value="SX">Sint Maarten</option>
          <option value="SK">Slovakia</option>
          <option value="SI">Slovenia</option>
          <option value="SB">Solomon Islands</option>
          <option value="SO">Somalia</option>
          <option value="ZA">South Africa</option>
          <option value="GS">South Georgia & South Sandwich Islands</option>
          <option value="KR">South Korea</option>
          <option value="SS">South Sudan</option>
          <option value="ES">Spain</option>
          <option value="LK">Sri Lanka</option>
          <option value="BL">St. Barthélemy</option>
          <option value="SH">St. Helena</option>
          <option value="KN">St. Kitts & Nevis</option>
          <option value="LC">St. Lucia</option>
          <option value="MF">St. Martin</option>
          <option value="PM">St. Pierre & Miquelon</option>
          <option value="VC">St. Vincent & Grenadines</option>
          <option value="SD">Sudan</option>
          <option value="SR">Suriname</option>
          <option value="SJ">Svalbard & Jan Mayen</option>
          <option value="SE">Sweden</option>
          <option value="CH">Switzerland</option>
          <option value="ST">São Tomé & Príncipe</option>
          <option value="TW">Taiwan</option>
          <option value="TJ">Tajikistan</option>
          <option value="TZ">Tanzania</option>
          <option value="TH">Thailand</option>
          <option value="TL">Timor-Leste</option>
          <option value="TG">Togo</option>
          <option value="TK">Tokelau</option>
          <option value="TO">Tonga</option>
          <option value="TT">Trinidad & Tobago</option>
          <option value="TA">Tristan da Cunha</option>
          <option value="TN">Tunisia</option>
          <option value="TR">Turkey</option>
          <option value="TM">Turkmenistan</option>
          <option value="TC">Turks & Caicos Islands</option>
          <option value="TV">Tuvalu</option>
          <option value="UM">U.S. Outlying Islands</option>
          <option value="UG">Uganda</option>
          <option value="UA">Ukraine</option>
          <option value="AE">United Arab Emirates</option>
          <option value="GB">United Kingdom</option>
          <option selected="selected" value="US">United States</option>
          <option value="UY">Uruguay</option>
          <option value="UZ">Uzbekistan</option>
          <option value="VU">Vanuatu</option>
          <option value="VA">Vatican City</option>
          <option value="VE">Venezuela</option>
          <option value="VN">Vietnam</option>
          <option value="WF">Wallis & Futuna</option>
          <option value="EH">Western Sahara</option>
          <option value="YE">Yemen</option>
          <option value="ZM">Zambia</option>
          <option value="ZW">Zimbabwe</option>
          <option value="AX">Åland Islands</option>
        </select>
        <input type="text" v-model="customer.state" placeholder="State/Province">
        <div class="button">
          <button type="button" @click.prevent="goToStep(1)">Previous</button>
          <button type="button" @click.prevent="goToStep(3)">Next</button>
        </div>
      </section>
    </div>
    <div class="section3" v-if="activePhase == 3">
      <h3>Enter the items you wish to bill</h3>
      <section>
        <span>STEP 3 OF 3</span>
        <div id="xmas-popup" class="popup" href="#">
	            <div class="popup-content">
	                <input type="text" name="item" placeholder="Item">
                  <input type="text" name="email" placeholder="Description">
                  <button style="margin-left: 90%;" type="button">Add</button>
	                <a onclick="this.parentElement.parentElement.style.display='none';" class="close"><i class="fa-solid fa-xmark"></i></a>
	            </div>
	        </div>
        <Item
          v-for="itemBill in itemBills"
          :key="itemBill"
          :itemBillProps="itemBill"
          @delete-item="deleteItem"
        />
        <div class="addItem">
          <a @click="additem"
            ><i class="fa-sharp fa-solid fa-tag fa-beat"></i>Add a item</a
          >
        </div>
        <!-- <p>{{ subtotal }}</p> -->
        <div class="button">
          <button type="button" @click.prevent="goToStep(2)">Previous</button>
          <button type="button" @click="goToStep(4)">Submit</button>
        </div>
      </section>
    </div>
  </form>
  <invoice-template :customerProps="customer" :companyProps="company" :itemBillProps="itemBills" v-if="activePhase == 4"/>
</template>

<script>
import { computed, ref } from "vue";
import Item from "./Item.vue";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import InvoiceTemplate from './InvoiceTemplate.vue';
export default {
  name: "Phase1",
  components: { Item, InvoiceTemplate },
  setup() {
    const activePhase = ref(1); // xac dinh phase hien tai
    const itemBills = ref([ // Item data phase 3
      {
        id: uuidv4(),
        Item: "",
        Description: "",
        Quantity: 0,
        Price: 0,
        amount(){
          return this.Quantity*this.Price;
        }
      },
    ]);
    const customer = ref({ // Customer data phase 2
      name: "",
      email: "",
      invoiceNumber: "",
      address: "",
      date: "",
      city: "",
      zipCode: "",
      country: "",
      state:"",
    });
    const company = ref({ // Company data phase 1
      name: "",
      city: "",
      zipCode: "",
      country: "",
      state: "",
    });
    const customerFromShopify = ref([]); // list customer lay tu shopify
    const getAllCustomers = async () => { // get customer datalist step 2
      const resp = await axios.get(`http://localhost:4000/user/customers`);
      customerFromShopify.value = resp.data.data;
      console.log(resp.data);
    };
    getAllCustomers();
    // const addButton = document.querySelectorAll('.add')[0]; // Click + hien ra pop up
    // addButton.forEach((btn,index) => {
      // addButton.addEventListener('click', () => {
      //   console.log("adu");
        // const popUp = document.getElementsByClassName('popup')[index];
        // popup.style.display = "block";
      // })
    // });
    const openPopup = (step) => {
      document.getElementsByClassName('popup')[step-2].style.display = "block";
    }
    const deleteItem = (id) => { // Xoa item step 3
      itemBills.value = itemBills.value.filter(
        (itemBill) => itemBill.id !== id
      );
    };
    const additem = () => { // Them item step 3
      itemBills.value.push({
        id: uuidv4(),
        Item: "",
        Description: "",
        Quantity: "",
        Price: "",
        amount(){
          return this.Quantity*this.Price;
        },
      });
    };
    // const subtotal = computed(() => {
    //   let subTotal = 0;
    //   itemBills.value.forEach(itemBill => {
    //     subTotal += itemBill.amount();
    //   });
    //   return subTotal;
    // })
    const goToStep = (step) => { // Chuyen? den step -> ?
      activePhase.value = step;
    };
    // const sendData = async () => {
    //   const res = await axios.post("", data);
    // };
    return {
      itemBills,
      deleteItem,
      additem,
      goToStep,
      activePhase,
      customer,
      company,
      customerFromShopify,
      openPopup
    };
  },
}
</script>

<style scoped>
.add {
  position: absolute;
  top: 35%;
  right: 10px;
}
.add:hover{
  cursor: pointer;
  user-select: none;
}
.close {
 position: absolute;
 top: 5px;
 right: 5px;
 border-radius: 50%;
 /* background: #222; */
 /* border: 3px solid #fff; */
 color: #fff;
 text-decoration: none;
 line-height: 0;
 padding: 9px 0 11px;
 width: 20px;
 text-align: center;
}
#xmas-popup .popup-content{
 width: 600px;
 /* height: 600px; */
 background: #bbb;
 margin: 100px auto;
 position: relative;
 border: 5px solid #fff;
 padding: 30px;
}
.popup {
 position: fixed;
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 background: rgba(0,0,0,0.6);
 display: none;
 z-index: 1;
}
input {
  width: 100%;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  color: #333;
  outline: none;
  height: 48px;
  padding-left: 8px;
  margin: 5px;
}
section {
  width: 60%;
  min-width: 250px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px 40px;
}
select {
  display: inline-block;
  height: 48px;
  width: 100%;
  margin: 5px;
  padding-left: 8px;
  color: #333;
  outline: none;
  box-shadow: 0 0 0 1px #6b7177;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  background: #fff;
}
h3 {
  text-align: center;
  color: #fff;
  width: 60%;
  margin: auto;
  padding: 20px;
  font-weight: normal;
  background-color: #4ea4dc;
}
span {
  color: #6b7177;
  font-weight: bold;
}
.button {
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin-top: 15px;
}
button {
  border: none;
  cursor: pointer;
  background-color: #4ea4dc;
  color: #fff;
  padding: 10px 15px;
}
.fa-sharp {
  font-size: 22px;
  color: #4ea4dc;
  padding-right: 7px;
}
</style>