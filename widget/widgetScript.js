document.addEventListener("DOMContentLoaded", () => {
    const contentWrapper = document.querySelector(".css-1qsvybm-contentWrapper");// Check SVG
    const checkSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>`;

    // Store reference to mailing list container for restoration
    let mailingListContainerRef = null;

    // Define Original content
    const originalContent = `
    <div class="css-g7g928-contentContainer">
            <h6
              class="MuiTypography-root MuiTypography-h6 css-1nqx2w-header"
            >
              Choose Method
            </h6>
            <div
              class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 css-n8uurg-gridContainer"
            >
              <div
                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 css-15j76c0"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth css-1tn9slx-flowButton-outstandingFlowButton"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    class="css-4onvs3-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9003 12.0905C11.561 13.4532 9.26766 12.7166 8.52393 12.5317L9.12605 10.1166C9.86979 10.302 12.2548 10.6698 11.9003 12.0905Z"
                      fill="black"
                    ></path>
                    <path
                      d="M12.2395 8.55575C11.9303 9.79464 10.0211 9.165 9.40161 9.01065L9.9477 6.82019C10.5677 6.97454 12.562 7.26287 12.2395 8.55575Z"
                      fill="black"
                    ></path>
                    <path
                      d="M12.4176 0.299231C7.06162 -1.03644 1.63537 2.22429 0.300719 7.58176C-1.03546 12.9382 2.22477 18.3644 7.58019 19.7006C12.9377 21.0368 18.3639 17.7761 19.6991 12.4191C21.0352 7.06165 17.775 1.6349 12.4176 0.299231ZM7.94187 6.74633C7.95562 6.51302 7.87514 6.21909 7.43042 6.10804C7.44774 6.09683 6.63371 5.90987 6.63371 5.90987L6.92611 4.73823L8.43905 5.11621L8.43804 5.12233C8.66523 5.17836 8.89956 5.23236 9.13899 5.28687L9.58879 3.48508L10.685 3.75864L10.2444 5.52527C10.5383 5.59251 10.8348 5.66026 11.1231 5.73209L11.5607 3.97717L12.658 4.25073L12.2087 6.05302C13.5938 6.53034 14.607 7.24555 14.4078 8.57613C14.2637 9.55012 13.7237 10.0218 13.0069 10.1869C13.9911 10.6993 14.4919 11.4854 14.0146 12.848C13.4226 14.5403 12.0156 14.6829 10.1446 14.3289L9.69067 16.1485L8.59341 15.875L9.04169 14.0803C8.75744 14.0095 8.46657 13.9346 8.16754 13.8531L7.71773 15.6564L6.62148 15.3829L7.07587 13.5597C6.81964 13.494 6.55934 13.4247 6.29342 13.358L4.86554 13.0019L5.4101 11.7462C5.4101 11.7462 6.21854 11.9612 6.20784 11.9454C6.51858 12.0218 6.65612 11.8195 6.71063 11.6845L7.94187 6.74633Z"
                      fill="black"
                    ></path></svg
                  >Crypto
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </div>
              <div
                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 css-1s50f5r"
              >
                <button 
                  class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth css-qupi44-flowButton" 
                  tabindex="0" 
                  type="button"
                >
                  <svg 
                    class="css-4onvs3-icon" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12.6667 2H3.33333C2.4496 2.00106 1.60237 2.35259 0.97748 2.97748C0.352588 3.60237 0.00105857 4.44961 0 5.33334H16C15.9989 4.44961 15.6474 3.60237 15.0225 2.97748C14.3976 2.35259 13.5504 2.00106 12.6667 2Z" 
                      fill="black"
                    ></path>
                    <path 
                      d="M0 10.6667C0.00105857 11.5504 0.352588 12.3976 0.97748 13.0225C1.60237 13.6474 2.4496 13.999 3.33333 14H12.6667C13.5504 13.999 14.3976 13.6474 15.0225 13.0225C15.6474 12.3976 15.9989 11.5504 16 10.6667V6.66669H0V10.6667ZM4.66666 10.3334C4.66666 10.5311 4.60802 10.7245 4.49813 10.8889C4.38825 11.0534 4.23207 11.1815 4.04935 11.2572C3.86662 11.3329 3.66556 11.3527 3.47158 11.3141C3.27759 11.2756 3.09941 11.1803 2.95956 11.0405C2.81971 10.9006 2.72447 10.7224 2.68588 10.5284C2.64729 10.3345 2.6671 10.1334 2.74279 9.95067C2.81847 9.76794 2.94665 9.61177 3.1111 9.50188C3.27554 9.392 3.46888 9.33335 3.66667 9.33335C3.93188 9.33335 4.18624 9.43871 4.37377 9.62625C4.56131 9.81378 4.66666 10.0681 4.66666 10.3334Z" 
                      fill="black"
                    ></path></svg
                  >Card
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </div>
              <div
                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 css-1s50f5r"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth css-qupi44-flowButton"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    class="css-4onvs3-icon"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.96116 7.35209L6.69631 4.99952L1.249 10.5356L0.5 9.79921L6.70419 3.49365L8.9911 5.8688L12.9252 2.10175L11.798 0.975098H14.741V3.91699L13.6679 2.84444L8.96116 7.35209ZM3.10626 15.0254H6.65166V10.0356H3.10626V15.0254ZM8.03043 15.0254H11.5758V8.45983H8.03043V15.0254ZM12.9546 5.17705V15.0254H16.5V5.17705H12.9546Z"
                      fill="black"
                    ></path></svg
                  >Stock
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </div>
              <div
                class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 css-15j76c0"
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-fullWidth css-qupi44-flowButton"
                  tabindex="0"
                  type="button"
                >
                  <svg
                    class="css-4onvs3-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7388 16.1693C18.9515 16.222 19.1406 16.0175 19.0788 15.8011L19.0424 15.6738L19.0124 15.572L18.756 14.6792V14.6729L18.7578 14.6647C18.7588 14.6602 18.756 14.6556 18.7533 14.6556C18.7506 14.6547 18.7478 14.6529 18.7469 14.6511L17.4069 9.98915C17.3897 9.92518 17.3556 9.86701 17.3081 9.82072C17.2607 9.77444 17.2017 9.74174 17.1374 9.72604C17.073 9.71034 17.0056 9.71222 16.9422 9.73147C16.8788 9.75073 16.8217 9.78666 16.7769 9.83551L15.5406 11.191L15.4451 11.2965L14.8224 11.9783L12.8633 14.1274C12.6669 14.342 12.7697 14.6947 13.0478 14.7638L13.2478 14.8129C13.2593 14.816 13.27 14.8216 13.279 14.8294C13.288 14.8372 13.2951 14.8469 13.2998 14.8579C13.3045 14.8688 13.3067 14.8806 13.3062 14.8925C13.3057 14.9044 13.3025 14.916 13.2969 14.9265C12.8581 15.7725 12.2652 16.5291 11.5488 17.1575C10.263 18.2906 8.62016 18.9364 6.90694 18.9821C6.37573 19.014 5.84273 18.9988 5.31421 18.9366L5.26875 18.9311C4.93966 18.8866 4.89512 18.9984 5.20057 19.133C5.68832 19.3461 6.18315 19.5425 6.68421 19.7221L6.72512 19.7357C10.2215 20.9866 14.4797 20.9285 17.1042 17.8357C17.1098 17.8291 17.1182 17.8192 17.1292 17.8063C17.3152 17.5883 18.2285 16.5174 18.316 16.1629C18.3169 16.1595 18.3176 16.1563 18.3184 16.1531C18.3336 16.0899 18.3384 16.0701 18.4042 16.0865L18.7388 16.1693ZM5.79449 10.5697C5.79441 10.5814 5.79437 10.593 5.79437 10.6046C5.79437 11.5183 6.02801 12.3747 6.43801 13.1138C6.60619 13.4165 6.80255 13.7001 7.02619 13.9592C7.91983 15.0011 9.22619 15.6584 10.6789 15.6584C11.0007 15.6584 11.1516 16.0538 10.8989 16.2602C9.14101 17.7158 6.91898 18.492 4.6371 18.4475C4.55637 18.4453 4.47892 18.4151 4.41801 18.362C3.53228 17.5958 2.78742 16.6804 2.2171 15.6575C1.35431 14.1135 0.903777 12.3733 0.908918 10.6046C0.908918 10.5882 0.908956 10.5719 0.909031 10.5555C0.900649 9.03983 1.2284 7.53788 1.87239 6.15908C2.78975 4.18416 4.33451 2.5681 6.26603 1.56262C7.63389 0.855992 9.13581 0.49608 10.6488 0.500032C10.763 0.499735 10.8773 0.501499 10.9916 0.505338C12.6544 0.559884 14.2107 1.04353 15.5635 1.85264C15.5847 1.86584 15.6031 1.88329 15.6173 1.90391C15.6231 1.91236 15.6282 1.92128 15.6325 1.93055C16.1269 2.23627 16.5944 2.58745 17.0288 2.98083C17.546 3.44812 17.4924 4.2654 16.976 4.7336L15.1515 6.38999C14.6351 6.85818 13.8542 6.79 13.2824 6.39726C12.5844 5.91446 11.768 5.631 10.921 5.57735C10.2219 5.53305 9.52369 5.64672 8.87754 5.90759C7.87193 6.32008 7.03061 7.06812 6.48222 8.01795C6.41951 8.12901 6.36102 8.2428 6.30694 8.35912C6.03071 8.95025 5.87171 9.58933 5.83875 10.241C5.83306 10.3518 5.81816 10.462 5.79449 10.5697Z"
                      fill="#000000"
                    ></path></svg
                  >DAF
                </button>
              </div>
            </div>
          </div>  `;// Define new Crypto pledge content
    const cryptoPledgeContent = `
        <div class="css-1xwmmb5-container">
            <div class="css-1lgwhlu-stage-active">Pledge</div>
            <div class="css-72qdf2-stage">Info</div>
            <div class="css-72qdf2-stage">Donate</div>
        </div>
        <div class="css-1hqqidj-contentContainer">
            <div class="css-1n025lw-form">
                <div class="css-nvtbxk-inputButtonsWrapper">
                    <h6 class="css-xegehu-fieldHeader">Select Your Crypto</h6>
                    <div class="MuiFormControl-root MuiFormControl-fullWidth css-120ul90-optionWrapper">
                        <div class="MuiAutocomplete-root MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon css-f7t77y">
                            <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-6175j8">
                                <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedStart MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-a9ceiy-inputRoot">
                                    <div style="height: 100%; display: flex; align-items: center; padding-left: 5px;">
                                        <img src="https://static.tgbwidget.com/currency_images/9a283134-342e-47b3-9390-dec6f5632f41.png" alt="btc" class="css-xkpa2e-icon">
                                    </div>
                                    <input aria-invalid="false" autocomplete="off" id=":r3i:" type="text" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1w6rtrn" aria-autocomplete="list" aria-expanded="false" autocapitalize="none" spellcheck="false" role="combobox" value="Bitcoin (BTC)">
                                    <div class="MuiAutocomplete-endAdornment css-mxlkbn">
                                        <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-clearIndicator css-o9we7g" tabindex="-1" type="button" aria-label="Clear" title="Clear">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1ti7yxa" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
                                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                            </svg>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </button>
                                        <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator css-119nmfq" tabindex="-1" type="button" aria-label="Open" title="Open">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10vyf6v" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                                <path d="M7 10l5 5 5-5z"></path>
                                            </svg>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </button>
                                    </div>
                                    <fieldset aria-hidden="true" class="MuiOutlinedInput-notchedOutline css-igs3ac">
                                        <legend class="css-gpjuor">
                                            <span class="notranslate">&ZeroWidthSpace;</span>
                                        </legend>
                                    </fieldset>
                                </div>
                            </div>
                            <!-- Dropdown List -->
                            <div id=":r0:" role="listbox" class="MuiAutocomplete-popper MuiAutocomplete-popperAnchor" style="display: none; aria-hidden='true'">
                                <div class="MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded css-1v5z04l" role="presentation">
                                    <div class="MuiList-root MuiList-padding css-1kty9z2">
                                        <div role="option" id=":r0:-option-0" class="MuiAutocomplete-option">
                                            <img src="../assets/images/bitcoin-logo.png" alt="btc" class="css-xkpa2e-icon" style="margin-right: 8px;">
                                            Bitcoin (BTC)
                                        </div>
                                        <div role="option" id=":r0:-option-1" class="MuiAutocomplete-option">
                                            <img src="../assets/images/bnb-logo.png" alt="bnb" class="css-xkpa2e-icon" style="margin-right: 8px;">
                                            Binance (BNB)
                                        </div>
                                        <div role="option" id=":r0:-option-2" class="MuiAutocomplete-option">
                                            <img src="../assets/images/ethereum-logo.png" alt="eth" class="css-xkpa2e-icon" style="margin-right: 8px;">
                                            Ethereum (ETH)
                                        </div>
                                        <div role="option" id=":r0:-option-3" class="MuiAutocomplete-option">
                                            <img src="../assets/images/solana-logo.webp" alt="sol" class="css-xkpa2e-icon" style="margin-right: 8px;">
                                            Solana (SOL)
                                        </div>
                                        <div role="option" id=":r0:-option-5" class="MuiAutocomplete-option">
                                            <img src="../assets/images/tether-logo.webp" alt="usdt" class="css-xkpa2e-icon" style="margin-right: 8px;">
                                            Tether (USDT) ERC-20
                                        </div>
                                    </div>
                                    <button class="MuiButton-root MuiButton-contained MuiButton-containedPrimary css-1e6y48t" style="position: absolute; top: 5px; right: 5px;">×</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="css-1v6b27o-inputWrapper">
                    <h6 class="css-xegehu-fieldHeader">Enter Donation Amount</h6>
                    <div class="MuiBox-root css-kt6xzp-amountBox" aria-label="">
                        <div class="MuiBox-root css-0">
                            <div class="MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary css-1lrwxa1-input">
                                <input id="donation-amount-input" class="MuiInputBase-input MuiInput-input css-14pi6y-mainCurrencyInput" type="text" value="0.11024143" inputmode="numeric">
                            </div>
                        <div>
                            <div id="sub-price" class="css-tmu8te-subPrice">
                                ~$10,000.00 
                            </div>
                        </div>
                    </div>
                    <div class="MuiBox-root css-1l76ifn-swapBox">
                        <div id="active-currency" class="css-xmvlmk-activeCurrency">BTC</div>
                        <span id="swap-currency-button" role="button" tabindex="0" class="css-1glwu23-iconExchangeWrapper">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-left" class="svg-inline--fa fa-right-left css-1c9z35a-iconExchange" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"></path>
                            </svg>
                        </span>
                        <div id="calculated-currency" class="css-1ug3wfl-calculatedCurrency">USD
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="css-1eir8xa-container">
        <div role="group" class="MuiButtonGroup-root MuiButtonGroup-contained MuiButtonGroup-horizontal MuiButtonGroup-fullWidth MuiButtonGroup-colorPrimary css-cmpokg-ButtonGroup" aria-label="full width large contained button group">
            <button id="Continue-Button" class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedContained MuiButtonGroup-groupedContainedHorizontal MuiButtonGroup-groupedContainedPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-firstButton css-11xjwq6-root-root-root-rightButton" tabindex="0" type="submit">
                Continue
                <span class="css-11r3ich-iconWrapRight">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-chevron-right" class="svg-inline--fa fa-circle-chevron-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
                    </svg>
                </span>
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            <button id="Previous-Button" class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedContained MuiButtonGroup-groupedContainedHorizontal MuiButtonGroup-groupedContainedPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-lastButton css-1pav7f1-root-root-root-leftButton" tabindex="0" type="button">
                <span class="css-oyxwus-iconWrapLeft">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-chevron-left" class="svg-inline--fa fa-circle-chevron-left " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
                    </svg>
                </span>
                Previous
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
        </div>
        </div>
    `;

    // Define new info content
    const cryptoInfoContent = `
        <div class="css-1xwmmb5-container">
        <div class="css-1lgwhlu-stage-active">Pledge</div>
        <div class="css-1lgwhlu-stage-active">Info</div>
        <div class="css-72qdf2-stage">Donate</div>
        </div>
        <form action="#">
        <div class="MuiContainer-root MuiContainer-maxWidthLg css-9wvnva">
            <div class="css-1tsm442-scrollContainer">
            <div class="css-imdext-checkboxContainer">
                <span
                class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium css-r5s1j3-root-root-root"
                label="Donate Anonymously"
                margin="dense"
                font-size="small"
                ><input
                    class="PrivateSwitchBase-input css-1m9pwf3"
                    id="outlined-dense"
                    name="isAnonymous"
                    type="checkbox"
                    data-indeterminate="false"
                    value="false"
                    data-gtm-form-interact-field-id="0" />
                <div class="css-znwa4o-checkboxSquare" font-size="medium"></div
                ><span class="MuiTouchRipple-root css-w0pj6f"></span>
                </span>
                <div
                role="checkbox"
                aria-checked="false"
                class="css-b3ly1c-subscriptionText"
                tabindex="0"
                >
                Donate Anonymously
                </div>
            </div>
            <div class="css-1cmmx5z-formItem">
                <div
                class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root css-hmr0tn-defaultInput"
                >
                <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1x2xqv7"
                    data-shrink="false"
                    for=":r3:"
                    id=":r3:-label"
                    >First name<span
                    aria-hidden="true"
                    class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    >&thinsp;*</span
                    ></label
                >
                <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd css-1l59lqc"
                >
                    <input
                    aria-invalid="false"
                    id=":r3:"
                    name="firstName"
                    required=""
                    type="text"
                    class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1i2c28l"
                    value=""
                    />
                    <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                    <legend class="css-1pbc52w">
                        <span>First name&thinsp;*</span>
                    </legend>
                    </fieldset>
                </div>
                </div>
            </div>
            <div class="css-1cmmx5z-formItem">
                <div
                class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root css-hmr0tn-defaultInput"
                >
                <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1x2xqv7"
                    data-shrink="false"
                    for=":r4:"
                    id=":r4:-label"
                    >Last name<span
                    aria-hidden="true"
                    class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    >&thinsp;*</span
                    ></label
                >
                <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd css-1l59lqc"
                >
                    <input
                    aria-invalid="false"
                    id=":r4:"
                    name="lastName"
                    required=""
                    type="text"
                    class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1i2c28l"
                    value=""
                    />
                    <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                    <legend class="css-1pbc52w">
                        <span>Last name&thinsp;*</span>
                    </legend>
                    </fieldset>
                </div>
                </div>
            </div>
            <div class="css-10l07r9-formItem-longView">
                <div
                class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root css-hmr0tn-defaultInput"
                >
                <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1x2xqv7"
                    data-shrink="false"
                    for=":r5:"
                    id=":r5:-label"
                    >Email<span
                    aria-hidden="true"
                    class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    >&thinsp;*</span
                    ></label
                >
                <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd css-1l59lqc"
                >
                    <input
                    aria-invalid="false"
                    id=":r5:"
                    name="email"
                    required=""
                    type="email"
                    class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1i2c28l"
                    value=""
                    />
                    <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                    <legend class="css-1pbc52w">
                        <span>Email&thinsp;*</span>
                    </legend>
                    </fieldset>
                </div>
                </div>
            </div>
            <div class="css-10l07r9-formItem-longView">
                <div class="MuiAutocomplete-root css-6zu0np-autocompleteInput">
                <div
                    class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root css-cytq4y-autocompleteInput"
                >
                    <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1x2xqv7"
                    data-shrink="false"
                    for=":r6:"
                    id=":r6:-label"
                    >Country<span
                        aria-hidden="true"
                        class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                        >&thinsp;*</span
                    ></label
                    >
                    <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiAutocomplete-inputRoot css-c9b5uv"
                    >
                    <input
                        aria-invalid="false"
                        id=":r6:"
                        name="country"
                        required=""
                        type="text"
                        class="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused css-vg88c7"
                        value=""
                    />
                    <fieldset
                        aria-hidden="true"
                        class="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                        <legend class="css-1pbc52w">
                        <span>Country&thinsp;*</span>
                        </legend>
                    </fieldset>
                    </div>
                </div>
                </div>
            </div>
            <div class="css-10l07r9-formItem-longView">
                <div class="MuiAutocomplete-root css-6zu0np-autocompleteInput">
                <div
                    class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root css-cytq4y-autocompleteInput"
                >
                    <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1x2xqv7"
                    data-shrink="false"
                    for=":r8:"
                    id=":r8:-label"
                    >State/Province/Region<span
                        aria-hidden="true"
                        class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                        >&thinsp;*</span
                    ></label
                    >
                    <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiAutocomplete-inputRoot css-c9b5uv"
                    >
                    <input
                        aria-invalid="false"
                        id=":r8:"
                        name="state/province/region"
                        required=""
                        type="text"
                        class="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused css-vg88c7"
                        value=""
                    />
                    <fieldset
                        aria-hidden="true"
                        class="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                        <legend class="css-1pbc52w">
                        <span>State/Province/Region&thinsp;*</span>
                        </legend>
                    </fieldset>
                    </div>
                </div>
                </div>
            </div>
            <div class="css-10l07r9-formItem-longView">
                <div
                class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root css-hmr0tn-defaultInput"
                >
                <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1x2xqv7"
                    data-shrink="false"
                    for=":ra:"
                    id=":ra:-label"
                    >Address 1<span
                    aria-hidden="true"
                    class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    >&thinsp;*</span
                    ></label
                >
                <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd css-1l59lqc"
                >
                    <input
                    aria-invalid="false"
                    id=":ra:"
                    name="address1"
                    required=""
                    type="text"
                    class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1i2c28l"
                    value=""
                    />
                    <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                    <legend class="css-1pbc52w">
                        <span>Address 1&thinsp;*</span>
                    </legend>
                    </fieldset>
                </div>
                </div>
            </div>
            <div class="css-10l07r9-formItem-longView">
                <div
                class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root css-hmr0tn-defaultInput"
                >
                <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1x2xqv7"
                    data-shrink="false"
                    for=":rb:"
                    id=":rb:-label"
                    >Address 2</label
                >
                <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd css-1l59lqc"
                >
                    <input
                    aria-invalid="false"
                    id=":rb:"
                    name="address2"
                    type="text"
                    class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1i2c28l"
                    value=""
                    />
                    <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                    <legend class="css-1pbc52w"><span>Address 2</span></legend>
                    </fieldset>
                </div>
                </div>
            </div>
            <div class="css-1cmmx5z-formItem">
                <div
                class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root css-hmr0tn-defaultInput"
                >
                <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1x2xqv7"
                    data-shrink="false"
                    for=":rc:"
                    id=":rc:-label"
                    >City<span
                    aria-hidden="true"
                    class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    >&thinsp;*</span
                    ></label
                >
                <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd css-1l59lqc"
                >
                    <input
                    aria-invalid="false"
                    id=":rc:"
                    name="city"
                    required=""
                    type="text"
                    class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1i2c28l"
                    value=""
                    />
                    <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                    <legend class="css-1pbc52w">
                        <span>City&thinsp;*</span>
                    </legend>
                    </fieldset>
                </div>
                </div>
            </div>
            <div class="css-1cmmx5z-formItem">
                <div
                class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root css-hmr0tn-defaultInput"
                >
                <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-sizeMedium MuiInputLabel-outlined css-1x2xqv7"
                    data-shrink="false"
                    for=":rd:"
                    id=":rd:-label"
                    >ZIP Code<span
                    aria-hidden="true"
                    class="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    >&thinsp;*</span
                    ></label
                >
                <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd css-1l59lqc"
                >
                    <input
                    aria-invalid="false"
                    id=":rd:"
                    name="zipCode"
                    required=""
                    type="text"
                    class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1i2c28l"
                    value=""
                    />
                    <fieldset
                    aria-hidden="true"
                    class="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                    <legend class="css-1pbc52w">
                        <span>ZIP Code&thinsp;*</span>
                    </legend>
                    </fieldset>
                </div>
                </div>
            </div>
            <div class="css-jqqou-checkboxContainer-cleanCheckboxContainer">
                <span
                class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium css-r5s1j3-root-root-root"
                label="Join our mailing list for news and updates"
                margin="dense"
                font-size="small"
                ><input
                    class="PrivateSwitchBase-input css-1m9pwf3"
                    id="outlined-dense"
                    name="isCharityCommunicationAllowed"
                    type="checkbox"
                    data-indeterminate="false"
                    value="false" />
                <div class="css-znwa4o-checkboxSquare" font-size="medium"></div
                ></span>
                <div
                role="checkbox"
                aria-checked="false"
                class="css-b3ly1c-subscriptionText"
                tabindex="0"
                >
                Join our mailing list for news and updates
                </div>
            </div>
            </div>
            <div class="css-1figxrx-container-captchaTerms">
            This site is protected by reCAPTCHA and the Google
            <a class="css-1t9b6g-link" href="https://policies.google.com/privacy"
                >Privacy Policy</a
            >
            and
            <a class="css-1t9b6g-link" href="https://policies.google.com/terms"
                >Terms and Conditions</a
            >
            apply.
            </div>
        </div>
        <div class="css-gd7yyz-modalContainer" id="modalSubmitContainer"></div>
        <div class="css-1eir8xa-container">
            <div
            role="group"
            class="MuiButtonGroup-root MuiButtonGroup-contained MuiButtonGroup-horizontal MuiButtonGroup-fullWidth MuiButtonGroup-colorPrimary css-cmpokg-ButtonGroup"
            aria-label="full width large contained button group"
            >
            <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedContained MuiButtonGroup-groupedContainedHorizontal MuiButtonGroup-groupedContainedPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-firstButton css-11xjwq6-root-root-root-rightButton"
                tabindex="0"
                type="submit"
            >
                Continue<span class="css-11r3ich-iconWrapRight"
                ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-chevron-right"
                    class="svg-inline--fa fa-circle-chevron-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                    fill="currentColor"
                    d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
                    ></path></svg
                ></span></button
            ><button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedContained MuiButtonGroup-groupedContainedHorizontal MuiButtonGroup-groupedContainedPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-lastButton css-1pav7f1-root-root-root-leftButton"
                tabindex="0"
                type="button"
            >
                <span class="css-oyxwus-iconWrapLeft"
                ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-chevron-left"
                    class="svg-inline--fa fa-circle-chevron-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                    fill="currentColor"
                    d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"
                    ></path></svg></span
                >Previous
            </button>
            </div>
        </div>
        </form>`;

    const donateCryptoContent = `
        <div class="css-1xwmmb5-container">
            <div class="css-1lgwhlu-stage-active">Pledge</div>
            <div class="css-1lgwhlu-stage-active">Info</div>
            <div class="css-1lgwhlu-stage-active">Donate</div>
        </div>
        <div
            class="MuiContainer-root MuiContainer-maxWidthLg css-agn7jh-donationContainerWrapper"
        >
            <div class="css-si0k8e-topContainer">
            <div class="css-86anb6-topMessageContainer">
                <div class="css-ydbbb8-amountText">
                Use the address below to donate<br /><b>0.10318753519339872 BTC</b
                ><span
                    class="css-148xxbd-iconEyeTooltip"
                    aria-label="Please note that your donation will clear even if you donate a different amount than you pledged."
                    ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-exclamation"
                    class="svg-inline--fa fa-circle-exclamation"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    >
                    <path
                        fill="currentColor"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                    ></path></svg></span
                > from your wallet.
                </div>
            </div>
            <div class="css-xutd6g-qrWrapper">
                <img
                src="https://static.tgbwidget.com/currency_images/9a283134-342e-47b3-9390-dec6f5632f41.png"
                alt="btc"
                class="css-1ehf2rk-iconWrapQR"
                /><img
                class="css-fwvc3b-qr"
                src="../assets/images/qr-bitcoin.png"
                alt="donation wallet address"
                />
            </div>
            </div>
            <div class="css-okmeyj-adresses">
            <button type="button" class="css-1hzescm-addressCopyButton">
                <span>bc1q6t3hvau4ak...w4tagqsckm4t86</span
                ><span class="css-11nzy76-iconCopyWrapper"
                ><svg
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M10.8327 16.6667C11.9373 16.6654 12.9964 16.2259 13.7775 15.4448C14.5586 14.6637 14.998 13.6047 14.9993 12.5V5.20251C15.0006 4.76448 14.915 4.33055 14.7473 3.92586C14.5797 3.52118 14.3334 3.1538 14.0227 2.84501L12.1543 0.976681C11.8456 0.665993 11.4782 0.419684 11.0735 0.252031C10.6688 0.0843791 10.2349 -0.00128163 9.79685 1.44913e-05H5.83268C4.72802 0.00133771 3.66898 0.440749 2.88787 1.22186C2.10675 2.00298 1.66734 3.06202 1.66602 4.16668V12.5C1.66734 13.6047 2.10675 14.6637 2.88787 15.4448C3.66898 16.2259 4.72802 16.6654 5.83268 16.6667H10.8327ZM3.33268 12.5V4.16668C3.33268 3.50364 3.59607 2.86776 4.06492 2.39891C4.53376 1.93007 5.16964 1.66668 5.83268 1.66668C5.83268 1.66668 9.93185 1.67835 9.99935 1.68668V3.33335C9.99935 3.77538 10.1749 4.1993 10.4875 4.51186C10.8001 4.82442 11.224 5.00001 11.666 5.00001H13.3127C13.321 5.06751 13.3327 12.5 13.3327 12.5C13.3327 13.1631 13.0693 13.7989 12.6004 14.2678C12.1316 14.7366 11.4957 15 10.8327 15H5.83268C5.16964 15 4.53376 14.7366 4.06492 14.2678C3.59607 13.7989 3.33268 13.1631 3.33268 12.5ZM18.3327 6.66668V15.8333C18.3314 16.938 17.8919 17.9971 17.1108 18.7782C16.3297 19.5593 15.2707 19.9987 14.166 20H6.66602C6.445 20 6.23304 19.9122 6.07676 19.7559C5.92048 19.5997 5.83268 19.3877 5.83268 19.1667C5.83268 18.9457 5.92048 18.7337 6.07676 18.5774C6.23304 18.4211 6.445 18.3333 6.66602 18.3333H14.166C14.8291 18.3333 15.4649 18.07 15.9338 17.6011C16.4026 17.1323 16.666 16.4964 16.666 15.8333V6.66668C16.666 6.44567 16.7538 6.23371 16.9101 6.07743C17.0664 5.92115 17.2783 5.83335 17.4993 5.83335C17.7204 5.83335 17.9323 5.92115 18.0886 6.07743C18.2449 6.23371 18.3327 6.44567 18.3327 6.66668Z"
                    fill="#291B4F"
                    ></path></svg
                ></span>
            </button>
            </div>
            <div>
            <p class="css-j4yywg-donationNotes">
                Send only BTC to this address using the Bitcoin blockchain. Sending
                other unsupported tokens or NFTs to this address may result in the
                loss of your donation. The address will expire after 180 days if
                unused.
            </p>
            </div>
        </div>
        <div class="css-1eir8xa-container">
            <div
            role="group"
            class="MuiButtonGroup-root MuiButtonGroup-contained MuiButtonGroup-horizontal MuiButtonGroup-fullWidth MuiButtonGroup-colorPrimary css-cmpokg-ButtonGroup"
            aria-label="full width large contained button group"
            >
            <button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedContained MuiButtonGroup-groupedContainedHorizontal MuiButtonGroup-groupedContainedPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-firstButton css-11xjwq6-root-root-root-rightButton"
                tabindex="0"
                type="submit"
            >
                Start Over<span class="css-11r3ich-iconWrapRight"
                ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrows-rotate"
                    class="svg-inline--fa fa-arrows-rotate"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                    fill="currentColor"
                    d="M89.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L370.3 160H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H447.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L398.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM23 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L109.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
                    ></path></svg
                ></span></button
            ><button
                class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedContained MuiButtonGroup-groupedContainedHorizontal MuiButtonGroup-groupedContainedPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-fullWidth MuiButtonGroup-lastButton css-1pav7f1-root-root-root-leftButton"
                tabindex="0"
                type="button"
            >
                <span class="css-oyxwus-iconWrapLeft"
                ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-chevron-left"
                    class="svg-inline--fa fa-circle-chevron-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                    fill="currentColor"
                    d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"
                    ></path></svg></span
                >Previous
            </button>
            </div>
        </div>`;

    // Track current content state
    let currentContent = 'original'; // Possible values: 'original', 'pledge', 'info', 'donate'

    // State for crypto price and input mode
    let selectedCrypto = {
        id: 'bitcoin',      // CoinGecko id
        symbol: 'BTC',      // Symbol for display
        path: '../assets/images/bitcoin-logo.png',
        qrCode: '../assets/images/qr-bitcoin.png',
        address: 'bc1q6t3hvau4akptdjjvlaja3g68w4tagqsckm4t86',
        alt: 'btc',
        name: 'Bitcoin',    // Name for display
        blockchain: 'Bitcoin', // Name of blockchain 
        decimals: 8         // Number of decimals for formatting
    };
    let cryptoPrice = 0;    // Current price in USD
    let isFiatInput = false; // false: BTC input, true: USD input
    let isInputFocused = false; // Track input focus
    let selectedAmount = '0.10318753519339872 BTC'; // Default BTC amount

    // This is the mapping template
    const cryptoOptionsMap = {
        "Bitcoin (BTC)": { name: 'Bitcoin', symbol: "BTC", id: "bitcoin", path: '../assets/images/bitcoin-logo.png', qrCode: '../assets/images/qr-bitcoin.png', address: 'bc1q6t3hvau4akptdjjvlaja3g68w4tagqsckm4t86', blockchain: 'Bitcoin', alt: "btc", decimals: 8 },
        "Binance (BNB)": { name: 'Binance', symbol: "BNB", id: "binancecoin", path: '../assets/images/bnb-logo.png', qrCode: '../assets/images/qr-bnb.png', address: '0xf7Ba10625DB3BB5bA9B260C1f43E0E6669335354', blockchain: 'BNB Chain', alt: "bnb", decimals: 8 },
        "Ethereum (ETH)": { name: 'Ethereum', symbol: "ETH", id: "ethereum", path: '../assets/images/ethereum-logo.png', qrCode: '../assets/images/qr-ethereum.png', address: '0xf7Ba10625DB3BB5bA9B260C1f43E0E6669335354', blockchain: 'Ethereum', alt: "eth", decimals: 8 },
        "Solana (SOL)": { name: 'Solana', symbol: "SOL", id: "solana", path: '../assets/images/solana-logo.webp', qrCode: '../assets/images/qr-solana.png', address: '5ZUqg8UP2H6vsgkQp4JJFc3wy5TBYEzNNrHRWC72A8kp', blockchain: 'Solana', alt: "sol", decimals: 8 },
        "USD Coin (USDC) ERC-20": { name: 'USD Coin', symbol: "USDC", id: "usd-coin", path: '../assets/images/usdc-logo.png', qrCode: '../assets/images/qr-usdc.png', address: '0xf7Ba10625DB3BB5bA9B260C1f43E0E6669335354', blockchain: 'Ethereum', alt: "usdc", decimals: 8 },
        "Tether (USDT) ERC-20": { name: 'Tether', symbol: "USDT", id: "tether", path: '../assets/images/tether-logo.webp', qrCode: '../assets/images/qr-tether.png', address: '0xf7Ba10625DB3BB5bA9B260C1f43E0E6669335354', blockchain: 'Ethereum', alt: "usdt", decimals: 8 },
        "XRP (XRP)": { name: 'Ripple', symbol: "XRP", id: "ripple", path: '../assets/images/xrp-logo.png', qrCode: '../assets/images/qr-xrp.png', address: 'rKr97GQ6MsqAuQNuPwjupYFsayESjawpP1', blockchain: 'XRP Ledger', alt: "xrp", decimals: 8 },
    }

    // Format numbers for display
    const formatFiat = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    const formatCrypto = (value) => {
        return Number(value).toFixed(selectedCrypto.decimals).replace(/\.?0+$/, '');
    };

    // Fetch cryptocurrency price from CoinGecko
    const fetchCryptoPrice = async () => {
        const input = document.getElementById('donation-amount-input');
        const activeCurrency = document.getElementById('active-currency');
        const calculatedCurrency = document.getElementById('calculated-currency');
        if (!input || !activeCurrency || !calculatedCurrency) return;

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${selectedCrypto.id}&vs_currencies=usd`);
            const data = await response.json();
            cryptoPrice = data[selectedCrypto.id]?.usd || 0;
            if (cryptoPrice > 0) {
                input.value = isFiatInput ? formatFiat(10000) : formatCrypto(10000 / cryptoPrice);
                activeCurrency.textContent = isFiatInput ? 'USD' : selectedCrypto.symbol;
                calculatedCurrency.textContent = isFiatInput ? selectedCrypto.symbol : 'USD';
                updateSubPrice();
            } else {
                console.warn('Invalid crypto price fetched, using default.');
                input.value = isFiatInput ? formatFiat(10000) : formatCrypto(10000 / 1); // Fallback price of 1
            }
        } catch (error) {
            console.error('Failed to fetch crypto price:', error);
            input.value = isFiatInput ? formatFiat(10000) : formatCrypto(10000 / 1); // Fallback
        }
    };

    // Update sub-price based on input value
    const updateSubPrice = () => {
        const input = document.getElementById('donation-amount-input');
        const subPrice = document.getElementById('sub-price');
        if (!input || !subPrice || cryptoPrice <= 0) {
            if (subPrice) subPrice.textContent = isFiatInput ? '~10000.00' : '~0.00000000 BTC';
            return;
        }

        const inputValue = parseFloat(input.value.replace(/[^0-9.]/g, '')) || (isFiatInput ? 10000 : 0);
        let subPriceValue;

        if (isFiatInput) {
            // Input is USD, sub-price shows crypto equivalent
            subPriceValue = inputValue / cryptoPrice;
            subPrice.textContent = `~${formatCrypto(subPriceValue)}`;
        } else {
            // Input is BTC, sub-price shows USD equivalent
            subPriceValue = inputValue * cryptoPrice;
            subPrice.textContent = `~${formatFiat(subPriceValue)}`;
        }
    };

    // Initialize crypto input (updated with dropdown logic)
    const initializeCryptoInput = () => {
        const input = document.getElementById(':r3i:');
        const inputBase = input.closest('.MuiInputBase-root');
        const autocompleteRoot = input.closest('.MuiAutocomplete-root');
        const dropdown = document.getElementById(':r0:');
        const options = dropdown ? dropdown.querySelectorAll('[role="option"]') : [];
        const donationInput = document.getElementById('donation-amount-input');
        const swapButton = document.getElementById('swap-currency-button');
        const activeCurrency = document.getElementById('active-currency');
        const calculatedCurrency = document.getElementById('calculated-currency');
        const subPrice = document.getElementById('sub-price');
        const inputBox = document.querySelector('.css-f7t77y')

        if (!input || !inputBase || !autocompleteRoot || !dropdown || !donationInput || !swapButton || !activeCurrency || !calculatedCurrency || !subPrice) {
            console.error('Required elements not found');
            return;
        }

        // Helper to handle option selection
        const handleOptionSelection = async (option) => {
            const value = option.textContent.trim();
            const img = option.querySelector('img');

            // Update input value
            input.value = value;

            // Update input image if present
            if (img) {
                const inputImg = inputBase.querySelector('img');
                if (inputImg) {
                    inputImg.src = img.src;
                    inputImg.alt = img.alt;
                }
            }

            // Update selectedCrypto if it exists in the map
            if (cryptoOptionsMap[value]) {
                selectedCrypto = cryptoOptionsMap[value];
                await fetchCryptoPrice();
                updateSelectedAmount();
                console.log("✅ Selected amount updated to:", selectedAmount);
            }

            updateSubPrice();
        };

        // Attach fast event listener for both PC and mobile
        dropdown.addEventListener('pointerdown', (e) => {
            const option = e.target.closest('[role="option"]');
            if (!option) return;

            // Prevent input blur from firing before selection
            e.preventDefault();

            handleOptionSelection(option);

            // Optionally, close the dropdown manually
            dropdown.style.display = 'none';
            dropdown.setAttribute('aria-hidden', 'true');
            input.setAttribute('aria-expanded', 'false');
            input.removeAttribute('aria-controls');
            input.removeAttribute('aria-activedescendant');
            inputBase.classList.remove('Mui-focused');
            autocompleteRoot.removeAttribute('aria-owns');

            // Focus back on input if needed
            input.focus();
        });

        // Handle crypto input focus
        inputBox.addEventListener('click', () => {
            dropdown.style.display = 'block';
            dropdown.setAttribute('aria-hidden', 'false');
            input.setAttribute('aria-expanded', 'true');
            input.setAttribute('aria-controls', ':r0:');
            if (options.length > 0) {
                input.setAttribute('aria-activedescendant', ':r0:-option-0');
            }
            inputBase.classList.add('Mui-focused');
            autocompleteRoot.setAttribute('aria-owns', ':r0:');
            input.focus()
        });

        // Handle crypto input focus
        input.addEventListener('focus', () => {
            dropdown.style.display = 'block';
            dropdown.setAttribute('aria-hidden', 'false');
            input.setAttribute('aria-expanded', 'true');
            input.setAttribute('aria-controls', ':r0:');
            if (options.length > 0) {
                input.setAttribute('aria-activedescendant', ':r0:-option-0');
            }
            inputBase.classList.add('Mui-focused');
            autocompleteRoot.setAttribute('aria-owns', ':r0:');
        });

        // Handle crypto input blur
        input.addEventListener('blur', () => {
            dropdown.style.display = 'none';
            dropdown.setAttribute('aria-hidden', 'true');
            input.setAttribute('aria-expanded', 'false');
            input.removeAttribute('aria-controls');
            input.removeAttribute('aria-activedescendant');
            inputBase.classList.remove('Mui-focused');
            autocompleteRoot.removeAttribute('aria-owns');
        });

        // Handle close button
        const closeButton = dropdown.querySelector('button');
        if (closeButton) {
            closeButton.style.border = 'none'
            closeButton.style.background = 'transparent'
            closeButton.style.cursor = 'pointer'
            closeButton.style.width = '1em'
            closeButton.style.height = '1em'
            closeButton.style.color = 'rgba(0, 0, 0, 0.54)'
            closeButton.style.fontSize = '20px'
            closeButton.addEventListener('click', () => {
                input.blur();
            });
        }

        // Handle donation input changes (unchanged)
        donationInput.addEventListener('input', (event) => {
            const value = event.target.value;
            if (!/^\d*\.?\d*$/.test(value)) {
                event.target.value = value.slice(0, -1);
                return;
            }
            const numericValue = parseFloat(value) || 0;
            selectedAmount = isFiatInput ? `${formatCrypto(numericValue / cryptoPrice)} ${selectedCrypto.symbol}` : `${formatCrypto(numericValue)} ${selectedCrypto.symbol}`;
            updateSubPrice();
        });

        // Handle donation input focus (unchanged)
        donationInput.addEventListener('focus', () => {
            isInputFocused = true;
            const rawValue = parseFloat(donationInput.value.replace(/[^0-9.]/g, '')) || 0;
            donationInput.value = rawValue.toString();
        });

        // Handle donation input blur (unchanged)
        donationInput.addEventListener('blur', () => {
            isInputFocused = false;
            const value = parseFloat(donationInput.value) || 0;
            donationInput.value = isFiatInput ? formatFiat(value) : formatCrypto(value);
            selectedAmount = isFiatInput ? `${formatCrypto(value / cryptoPrice)} ${selectedCrypto.symbol}` : `${formatCrypto(value)} ${selectedCrypto.symbol}`;
            updateSubPrice();
        });

        // Handle currency swap (unchanged)
        swapButton.addEventListener('click', () => {
            const inputValue = donationInput.value;
            const subPriceValue = subPrice.textContent.replace(/^~/, '');
            donationInput.value = subPriceValue;
            subPrice.textContent = `~${inputValue}`;
            isFiatInput = !isFiatInput;
            if (isFiatInput) {
                activeCurrency.textContent = 'USD';
                calculatedCurrency.textContent = selectedCrypto.symbol;
            } else {
                activeCurrency.textContent = selectedCrypto.symbol;
                calculatedCurrency.textContent = 'USD';
            }
            const newInputValue = parseFloat(donationInput.value.replace(/[^0-9.]/g, '')) || 0;
            selectedAmount = isFiatInput ? `${formatCrypto(newInputValue / cryptoPrice)} ${selectedCrypto.symbol}` : `${formatCrypto(newInputValue)} ${selectedCrypto.symbol}`;
        });

        // Fetch initial price and set up periodic updates (unchanged)
        fetchCryptoPrice();
        setInterval(fetchCryptoPrice, 30000);
    };

    const updateSelectedAmount = () => {
        // 🧮 Ensure selectedAmount matches the current donation input and crypto selection
        const donationInput = document.getElementById('donation-amount-input');
        if (donationInput && cryptoPrice > 0) {
            const inputValue = parseFloat(donationInput.value.replace(/[^0-9.]/g, '')) || 0;
            if (isFiatInput) {
                // Convert USD input → crypto amount
                const cryptoValue = inputValue / cryptoPrice;
                selectedAmount = `${formatCrypto(cryptoValue)} ${selectedCrypto.symbol}`;
            } else {
                // Keep crypto input as is
                selectedAmount = `${formatCrypto(inputValue)} ${selectedCrypto.symbol}`;
            }
            console.log("🔄 Auto-updated selectedAmount before navigating to info:", selectedAmount);
        }
    }

    // Set initial content
    contentWrapper.innerHTML = originalContent;

    // Event delegation to detect button clicks
    document.addEventListener("click", (event) => {
    // Swap to donation content when Crypto button is clicked
    // Crypto button: Switch to cryptoPledgeContent
    if (event.target.classList.contains("css-1tn9slx-flowButton-outstandingFlowButton")) {
        contentWrapper.innerHTML = cryptoPledgeContent;
        currentContent = 'pledge';
        initializeCryptoInput(); // Initialize crypto input logic
    }

    // Swap back to original content when Previous button is clicked
    // Previous button: Handle navigation backward
    if (event.target.classList.contains("css-1pav7f1-root-root-root-leftButton")) {
        if (currentContent === 'donate') {
            contentWrapper.innerHTML = cryptoInfoContent;
            currentContent = 'info';
        } else if (currentContent === 'info') {
            contentWrapper.innerHTML = cryptoPledgeContent;
            currentContent = 'pledge';
            initializeCryptoInput(); // Re-initialize crypto input logic
        } else if (currentContent === 'pledge') {
            contentWrapper.innerHTML = originalContent;
            currentContent = 'original';
        }
    }

    // Logic for Continue button in cryptoInfoContent
    if (event.target.classList.contains("css-11xjwq6-root-root-root-rightButton")) {
        if (currentContent === 'pledge') {
            updateSelectedAmount();
            contentWrapper.innerHTML = cryptoInfoContent;
            currentContent = 'info';
        } else if (currentContent === 'info') {
            const form = contentWrapper.querySelector("form");
            const requiredInputs = form.querySelectorAll("input[required]");
            let allFilled = true;

            // Check for empty required inputs
            requiredInputs.forEach((input) => {
                if (!input.value.trim()) {
                    allFilled = false;
                    // Apply blur-like error state
                    const formControl = input.closest(".MuiFormControl-root");
                    const label = formControl?.querySelector(".MuiFormLabel-root");
                    const inputDiv = formControl?.querySelector(".MuiInputBase-root");

                    if (formControl && label && inputDiv) {
                        label.classList.add("Mui-error");
                        inputDiv.classList.add("Mui-error");
                        input.setAttribute("aria-invalid", "true");
                        if (!inputDiv.querySelector(".MuiInputAdornment-root")) {
                            const adornmentDiv = document.createElement("div");
                            adornmentDiv.className = "MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-u7fgeo";
                            adornmentDiv.innerHTML = `
                                <svg class="MuiSvgIcon-root MuiSvgIcon-colorError MuiSvgIcon-fontSizeSmall css-1tsbva" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorIcon">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"></path>
                                </svg>
                        `;
                            inputDiv.insertBefore(adornmentDiv, inputDiv.querySelector("fieldset"));
                        }
                    }
                }
            });

            // Navigate to donateCryptoContent if all required inputs are filled
            if (allFilled) {
                console.log('Rendering donateCryptoContent with selectedAmount:', selectedAmount);
                // Render donateCryptoContent and update the <b> element via DOM
                contentWrapper.innerHTML = donateCryptoContent;
                const boldElement = contentWrapper.querySelector('.css-ydbbb8-amountText b');
                const qrWrapper = contentWrapper.querySelector('.css-xutd6g-qrWrapper');
                const addressButton = contentWrapper.querySelector('.css-1hzescm-addressCopyButton');
                const donationNotes = contentWrapper.querySelector('.css-j4yywg-donationNotes');
                const cryptoData = selectedCrypto;
                if (boldElement) {
                    boldElement.textContent = selectedAmount;
                    console.log('Updated <b> element to:', selectedAmount);
                } else {
                    console.error('Could not find .css-ydbbb8-amountText b element');
                }

                if (cryptoData && qrWrapper && addressButton && donationNotes) {
                    const images = qrWrapper.querySelectorAll("img");

                    // Update first image (crypto logo)
                    if(images[0]) {
                        images[0].src = cryptoData.path;
                        images[0].alt = cryptoData.alt;
                    }

                    // Update second image (QR code)
                    if (images[1]) {
                        images[1].src = cryptoData.qrCode;
                    }

                    // update wallet address in button
                    const addressSpan = addressButton.querySelector("span:not(.css-11nzy76-iconCopyWrapper)");
                    const text = `${cryptoData.address.slice(0, 14)}...${cryptoData.address.slice(-14)}`;
                    addressSpan.textContent = text;

                    // Update donation notes paragraph
                    donationNotes.textContent = `Send only ${cryptoData.symbol} to this address using the ${cryptoData.blockchain} blockchain. Sending other unsupported tokens or NFTs to this address may result in the loss of your donation. The address will expire after 180 days if unused.`;
                    console.log(`Updated donation page for ${cryptoData.symbol}`);                    
                } else {
                    console.warn('Missing one or more elements for donation content update.');
                }

                currentContent = 'donate';
            }
        } else if (currentContent === 'donate') {
            // Handle Start Over button click
            window.location.reload();
        }
    }
    });

    // Event delegation for anonymous checkbox and its subscription text
    document.addEventListener("click", (event) => {
    // Handle click on the "Donate Anonymously" subscription text div
    if (event.target.classList.contains("css-b3ly1c-subscriptionText") && event.target.textContent.trim() === "Donate Anonymously") {
        const subscriptionText = event.target;
        const checkboxContainer = subscriptionText.closest(".css-imdext-checkboxContainer");
        const checkbox = checkboxContainer?.querySelector(".PrivateSwitchBase-input[type='checkbox'][name='isAnonymous']");

        if (checkbox) {
            // Toggle checkbox state
            checkbox.checked = !checkbox.checked;
            // Dispatch change event to trigger the checkbox logic
            const changeEvent = new Event("change", { bubbles: true });
            checkbox.dispatchEvent(changeEvent);
        }
    }
    });

    //Event delegation for anonymous checkbox
    document.addEventListener("change", (event) => {
    if (event.target.classList.contains("PrivateSwitchBase-input") && event.target.type === "checkbox") {
        const checkbox = event.target;
        const checkboxSquare = checkbox.closest(".MuiCheckbox-root").querySelector(".css-znwa4o-checkboxSquare");
        const checkboxSpan = checkbox.closest(".MuiCheckbox-root");
        const subscriptionText = checkbox.closest(".css-imdext-checkboxContainer, .css-jqqou-checkboxContainer-cleanCheckboxContainer").querySelector(".css-b3ly1c-subscriptionText");

        // Only apply form field changes for isAnonymous checkbox
        const isAnonymousCheckbox = checkbox.name === "isAnonymous";
        const scrollContainer = checkbox.closest(".css-1tsm442-scrollContainer");
        const formFields = isAnonymousCheckbox ? scrollContainer?.querySelectorAll(".MuiFormControl-root") : [];
        const mailingListContainer = isAnonymousCheckbox ? scrollContainer?.querySelector(".css-jqqou-checkboxContainer-cleanCheckboxContainer") : null;

        if (checkboxSquare && checkboxSpan && subscriptionText) {
            const originalClassList = "MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium css-r5s1j3-root-root-root";
            const checkedClassList = "MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium Mui-checked MuiCheckbox-root MuiCheckbox-colorDefault MuiCheckbox-sizeMedium css-towbdj-root-root-checked-root";

            if (checkbox.checked) {
                checkboxSquare.innerHTML = checkSvg;
                checkbox.value = "true";
                checkboxSpan.className = checkedClassList;
                subscriptionText.setAttribute("aria-checked", "true");

                // Disable all form fields for isAnonymous
                if (isAnonymousCheckbox) {
                    formFields.forEach((field) => {
                        const input = field.querySelector("input:not([type='checkbox'])");
                        if (!input) return; // Skip if no relevant input

                        const label = field.querySelector("label");
                        const asterisk = label?.querySelector(".MuiFormLabel-asterisk");
                        const legend = field.querySelector("fieldset legend span");
                        const inputDiv = field.querySelector(".MuiInputBase-root");

                        if (label && input && legend) {
                            field.removeAttribute("title");
                            label.classList.add("Mui-disabled");
                            label.classList.remove("Mui-required");
                            label.classList.remove("Mui-error");
                            if (asterisk) asterisk.remove();
                            input.classList.add("Mui-disabled");
                            input.setAttribute("disabled", "");
                            input.removeAttribute("required");
                            legend.textContent = legend.textContent.replace(" *", "");
                            // ADDED: Clear error state
                            if (inputDiv) {
                                inputDiv.classList.remove("Mui-error");
                                input.setAttribute("aria-invalid", "false");
                                const adornment = inputDiv.querySelector(".MuiInputAdornment-root");
                                if (adornment) {
                                    adornment.remove();
                                }
                            }
                            input.value = "" // Clear form inputs
                            label.classList.remove("MuiInputLabel-shrink");
                            label.classList.remove("css-zywb3r");
                            label.classList.add("css-1x2xqv7");
                            label.setAttribute("data-shrink", "false");
                            inputDiv.classList.remove("Mui-focused");
                        }
                    });
                    // Remove and store mailing list container
                    if (mailingListContainer) {
                        mailingListContainerRef = mailingListContainer;
                        mailingListContainer.remove();
                    }
                }
            } else {
                checkboxSquare.innerHTML = "";
                checkbox.value = "false";
                checkboxSpan.className = originalClassList;
                subscriptionText.setAttribute("aria-checked", "false");

                // Re-enable all form fields for isAnonymous
                if (isAnonymousCheckbox) {
                    formFields.forEach((field) => {
                        const input = field.querySelector("input:not([type='checkbox'])");
                        if (!input) return; // Skip if no relevant input

                        const label = field.querySelector("label");
                        const legend = field.querySelector("fieldset legend span");

                        if (label && input && legend) {
                            const isAddress2 = input.name === "address2";
                            if (!isAddress2) {
                                field.setAttribute("title", "Required");
                                label.classList.add("Mui-required");
                                input.setAttribute("required", "");
                                if (!legend.textContent.endsWith("*")) {
                                    legend.textContent += " *";
                                }
                            }
                            label.classList.remove("Mui-disabled");
                            input.classList.remove("Mui-disabled");
                            input.removeAttribute("disabled");
                            if (!isAddress2 && !label.querySelector(".MuiFormLabel-asterisk")) {
                                const asterisk = document.createElement("span");
                                asterisk.className = "MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1";
                                asterisk.setAttribute("aria-hidden", "true");
                                asterisk.innerHTML = " *";
                                label.appendChild(asterisk);
                            }
                        }
                    });
                    // Restore mailing list container
                    if (mailingListContainerRef && !scrollContainer.querySelector(".css-jqqou-checkboxContainer-cleanCheckboxContainer")) {
                        scrollContainer.appendChild(mailingListContainerRef);
                    }
                }
            }
        }
    }
    });

    // Event delegation for input focus
    document.addEventListener("focus", (event) => {
        const inputNames = [
            "firstName",
            "lastName",
            "email",
            "country",
            "state/province/region",
            "address1",
            "address2",
            "city",
            "zipCode"
        ];
        if (event.target.matches('input[name="firstName"], input[name="lastName"], input[name="email"], input[name="country"], input[name="state/province/region"], input[name="address1"], input[name="address2"], input[name="city"], input[name="zipCode"]')) {
            const input = event.target;
            const formControl = input.closest(".MuiFormControl-root");
            const label = formControl?.querySelector(".MuiFormLabel-root");
            const inputDiv = formControl?.querySelector(".MuiInputBase-root");

            if (formControl && !formControl.classList.contains("Mui-disabled") && label) {

                // ADDED: Error state handling - Clear error state on focus
                label.classList.remove("Mui-error");
                inputDiv.classList.remove("Mui-error");
                input.setAttribute("aria-invalid", "false");
                const adornment = inputDiv.querySelector(".MuiInputAdornment-root");
                if (adornment) {
                    adornment.remove();
                }

                // Apply focus styles to label
                label.classList.remove("css-1x2xqv7");
                label.classList.add("MuiInputLabel-shrink", "Mui-focused", "css-zywb3r");
                label.setAttribute("data-shrink", "true");
                inputDiv.classList.add("Mui-focused");
            }
        }
    }, true); // Use capture phase for focus

    // Event delegation for input blur
    document.addEventListener("blur", (event) => {
        const inputNames = [
            "firstName",
            "lastName",
            "email",
            "country",
            "state/province/region",
            "address1",
            "address2",
            "city",
            "zipCode"
        ];
        if (event.target.matches('input[name="firstName"], input[name="lastName"], input[name="email"], input[name="country"], input[name="state/province/region"], input[name="address1"], input[name="address2"], input[name="city"], input[name="zipCode"]')) {
            const input = event.target;
            const formControl = input.closest(".MuiFormControl-root");
            const label = formControl?.querySelector(".MuiFormLabel-root");
            const inputDiv = formControl?.querySelector(".MuiInputBase-root")

            if (formControl && !formControl.classList.contains("Mui-disabled") && label) {
                // Revert focus styles, keep shrink if filled
                label.classList.remove("Mui-focused");
                if (!input.value.trim()) {
                    label.classList.remove("MuiInputLabel-shrink", "css-zywb3r");
                    label.classList.add("css-1x2xqv7");
                    label.setAttribute("data-shrink", "false");
                    inputDiv.classList.remove("Mui-focused");
                    
                } else {
                    label.classList.remove("css-zywb3r");
                    label.classList.add("MuiInputLabel-shrink", "css-zywb3r"); // Keep focused style for filled
                    label.setAttribute("data-shrink", "true");
                    inputDiv.classList.add("Mui-focused");
                }
                // ADDED: Error state handling - Apply or clear error state on blur
                if (input.hasAttribute("required") && !input.value.trim()) {
                    label.classList.add("Mui-error");
                    inputDiv.classList.add("Mui-error");
                    input.setAttribute("aria-invalid", "true");
                    if (!inputDiv.querySelector(".MuiInputAdornment-root")) {
                        const adornmentDiv = document.createElement("div");
                        adornmentDiv.className = "MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-u7fgeo";
                        adornmentDiv.innerHTML = `
                            <svg class="MuiSvgIcon-root MuiSvgIcon-colorError MuiSvgIcon-fontSizeSmall css-1tsbva" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorIcon">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"></path>
                            </svg>
                        `;
                        inputDiv.insertBefore(adornmentDiv, inputDiv.querySelector("fieldset"));
                    }
                } else {
                    inputDiv.classList.remove("Mui-error");
                    input.setAttribute("aria-invalid", "false");
                    const adornment = inputDiv.querySelector(".MuiInputAdornment-root");
                    if (adornment) {
                        adornment.remove();
                    }
                }
            }
        }
    }, true); // Use capture phase for blur

    // Event delegation for input changes
    document.addEventListener("input", (event) => {
        const inputNames = [
        "firstName",
        "lastName",
        "email",
        "country",
        "state/province/region",
        "address1",
        "address2",
        "city",
        "zipCode"
        ];
        if (event.target.matches('input[name="firstName"], input[name="lastName"], input[name="email"], input[name="country"], input[name="state/province/region"], input[name="address1"], input[name="address2"], input[name="city"], input[name="zipCode"]')) {
        const input = event.target;
        const formControl = input.closest(".MuiFormControl-root");
        const label = formControl?.querySelector(".MuiFormLabel-root");

        if (formControl && !formControl.classList.contains("Mui-disabled") && label) {
            input.setAttribute("value", input.value);
            if (input.value.trim()) {
                label.classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink", "css-zywb3r");
                label.classList.remove("css-1x2xqv7");
                label.setAttribute("data-shrink", "true");
            } else {
                label.classList.remove("MuiFormLabel-filled", "MuiInputLabel-shrink", "css-zywb3r");
                label.classList.add("css-1x2xqv7");
                label.setAttribute("data-shrink", "false");
            }
        }
        }
    });

    // Event delegation for address copy button in donateCryptoContent
    document.addEventListener("click", (event) => {
        if (event.target.closest(".css-1hzescm-addressCopyButton") && currentContent === 'donate') {
            const button = event.target.closest(".css-1hzescm-addressCopyButton");
            const addressSpan = button.querySelector("span:not(.css-11nzy76-iconCopyWrapper)");
            if (addressSpan) {
                const originalContent = addressSpan.textContent;
                const cryptoData = selectedCrypto;
                // Copy the address to clipboard
                navigator.clipboard.writeText(cryptoData.address) // Add your crypto address here
                    .then(() => {
                        // Change span content to "Copied"
                        addressSpan.textContent = "Copied";

                        // Revert to original content after 3 seconds
                        setTimeout(() => {
                            addressSpan.textContent = originalContent;
                        }, 2000);
                    })
                    .catch((err) => {
                        console.error("Failed to copy to clipboard:", err);
                    });
            }
        }
    });
});
