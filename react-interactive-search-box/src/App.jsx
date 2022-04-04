import './App.scss';
import Icons from './components/common/Icons';
import React, { useState } from 'react';

function App() {
    const [activeOption, setActiveOption] = useState(0);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [userInput, setUserInput] = useState('');
    const mockData = [
        {
            name: 'Ann Liebmann',
            phone: '+1 202-918-2132',
            nickName: '@Ann Lieb@',
            policyNumber: '12p41|235242',
        },
        {
            name: 'Anna Lockey',
            phone: '+45 25 47 65 85',
            nickName: '@Anna Loc@',
            policyNumber: '642432|4345',
        },
        {
            name: 'Sylvia Bautista',
            phone: '+28 25 47 65 85',
            nickName: '@Sylva Bat@',
            policyNumber: '340103|lkq31',
        },
        {
            name: 'Zachery Fuller',
            phone: '+45 25 47 65 85',
            nickName: '@Zachy@',
            policyNumber: '6542|23429',
        },
        {
            name: 'Siena Christian',
            phone: '+43 650 27296888',
            nickName: '@Sien@',
            policyNumber: '340103|86752362',
        },
        {
            name: 'Alexie Peck',
            phone: '+44 7105 579428',
            nickName: '@Alexy@',
            policyNumber: '6432|5432234',
        },
        {
            name: 'Marlie Schwartz',
            phone: '+376 690 104 711',
            nickName: '@Marly@',
            policyNumber: '340103|lkq31',
        },
    ];

    const onChange = e => {
        const userInput = e.target.value;
        const filteredOptions = mockData.filter(
            optionName => optionName.name.toLowerCase().startsWith(userInput.toLowerCase()) === true,
        );
        setActiveOption(0);
        setFilteredOptions(filteredOptions);
        setShowOptions(true);
        setUserInput(e.target.value);
    };

    const onClick = e => {
        setActiveOption(0);
        setFilteredOptions([]);
        setShowOptions(false);
        setUserInput(e.target.innerText);
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setActiveOption(0);
            setShowOptions(false);
            setFilteredOptions([]);
            setUserInput(filteredOptions[activeOption].name);
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            setActiveOption(prevState => prevState - 1);
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                return;
            }
            setActiveOption(prevState => prevState + 1);
        }
    };
    const getHighlightedText = highlightItem => {
        if (!highlightItem.name.toLowerCase().startsWith(userInput)) {
            return <span>{highlightItem.name}</span>;
        }
        const userInputLength = userInput.length;
        return (
            <span>
                <span className="text-bold">{highlightItem.name.substring(0, userInputLength)}</span>
                {highlightItem.name.substring(userInputLength)}
            </span>
        );
    };

    let optionList;
    if (showOptions && userInput) {
        if (filteredOptions.length) {
            optionList = (
                <ul className="search-dropdown">
                    {filteredOptions.map((item, index) => {
                        const { name, phone, nickName, policyNumber } = item;
                        let className;
                        if (index === activeOption) {
                            className = 'active';
                        }
                        let optionString = name.toLowerCase().replace(userInput, '<b>' + userInput + '</b>');
                        return (
                            <li className={`row search-dropdown-row py-3 ${className}`} key={index} onClick={onClick}>
                                <div className="col-12 contact-name pb-2 d-flex align-items-center">
                                    <Icons name="user pr-1" />
                                    {getHighlightedText(item)}
                                </div>
                                <div className="col-12 col-sm-4 contact-name pb-2 d-flex align-items-center">
                                    <Icons name="phone pr-1" />
                                    {phone}
                                </div>
                                <div className="col-12 col-sm-4 contact-name pb-2">{nickName}</div>
                                <div className="col-12 col-sm-4 contact-name pb-2 d-flex align-items-center">
                                    <Icons name="file-text pr-2" />
                                    {policyNumber}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            optionList = (
                <div className="search-dropdown no-options">
                    <em>This name not found!</em>
                </div>
            );
        }
    }
    return (
        <div className="App">
            <div className="container d-flex justify-content-center my-4">
                <div className="search-wrapper d-flex align-items-center">
                    <div className="search-box d-flex">
                        <Icons name="search" customClass="search-box-icon d-flex align-items-center gray pr-2" />
                        <input
                            type="text"
                            name="title"
                            placeholder="Search client name / pollicy number"
                            className="d-flex mb-2"
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            value={userInput}
                        />
                    </div>
                    <div className="search-wrapper">{optionList}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
