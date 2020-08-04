import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import CustomerList from './components/customerList';
import RewardSection from './components/rewardsSection';
import * as data from './data/customerList.json';
import { calculateRewards } from './util';

const SearchPage = () => {
    const [input, setInput] = useState('');
    const [customerList, setCustomerList] = useState(data.customer_list);
    const [rewards, setRewards] = useState(null);

    const updateInput = async (input) => {
        const filtered = data.customer_list.filter(customer => {
            return customer.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setCustomerList(filtered);
    };

    const handleOnPress = (data, index) => {
        const rewardsValue = calculateRewards(data.dollar_spent);
        let currentCustomerList = [...customerList];
        for (let i = 0; i < currentCustomerList.length; i++) {
            if (i === index) {
                if (currentCustomerList[index].isSelected) {
                    currentCustomerList[index].isSelected = !currentCustomerList[index].isSelected;
                } else {
                    currentCustomerList[index].isSelected = true;
                }
            } else {
                currentCustomerList[i].isSelected = false;
            }
        }

        setCustomerList(currentCustomerList);

        const rewardsData = {
            customerName: data.name,
            reward: rewardsValue
        };
        setRewards(rewardsData);
    };

    return (
        <>
            <h1>Customer List</h1>
            <SearchBar
                keyword={input}
                setKeyword={updateInput}
            />
            <CustomerList customerList={customerList} onItemPress={handleOnPress} />
            {
                rewards && (
                    <RewardSection data={rewards} />
                )
            }
        </>
    );
}

export default SearchPage