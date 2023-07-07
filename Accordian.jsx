import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity className=' w-screen items-center justify-center' >
   <TouchableOpacity className=' flex flex-row justify-around items-center w-full border border-4 border-[#adc11d] my-2 rounded-md' onPress={toggleAccordion}>
   <Text className=' text-lg'>Sun. 29/05/2023 </Text>
    <Text className=' text-lg'>Appreciative Greeting Softens Mind</Text>
    <Text className=' text-lg'>Philem 1:1-3</Text>
   </TouchableOpacity>
    {expanded && (
      <View>
        <Text className=' text-base'>In this example, each Accordion component has a title and content. When the user taps on the title, it triggers the toggleAccordion function, which updates the expanded state variable. Based on the value of expanded, the content of the accordion is conditionally rendered. If expanded is true, the content is displayed; otherwise, it remains hidden.

Feel free to customize this example to fit your specific requirements, such as adding styling or additional functionality.</Text>
      </View>
    )}
    </TouchableOpacity>
  );
};

export default Accordion;
