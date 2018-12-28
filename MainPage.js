import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import BigButton from './components/BigButton';
import WeightInput from './components/WeightInput';

export default class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            instructionsText:
               'Enter Kilos or Pounds to convert.',
        };
    }

    resetText = () => {
        this.kilosInput.resetText();
        this.poundsInput.resetText();

        this.setState({
            instructionsText:
                'Enter Kilos or Pounds to convert.',
        });
    };

    calculateWeight = () => {
        kilos= this.kilosInput.getText();
        pounds = this.poundsInpu
        t.getText();

        // Decide what text should be displayed based on inputs
     
        if (true)
        {
            // Calculate the Weight
            weight = kilos * 2.2046;
            weight2 = pounds / 2.2046;

            // Build the text to display
            text =
                this.kilosInput.getText() * 2.2046 +
                ' this it the amount of kilos converted to pounds' +'\n' +
                this.poundsInput.getText() / 2.2046 + 
                ' this is the amount of pounds converted to kilos';

            this.setState({
                instructionsText: text,
            });
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* ============HEADER============== */}

                <View style={styles.header}>
                    <Text style={styles.headerText}>Medical Calculator</Text>
                </View>

                {/* ================================ */}
                {/* ==============BODY============== */}

                <View style={styles.body}>
                    <Text style={styles.instructionsText}>
                        {this.state.instructionsText}
                    </Text>

                    <WeightInput
                        placeholder="Kilos"
                        ref={i => (this.kilosInput = i)}
               
                    />
                    <WeightInput
                        placeholder="Pounds"
                        ref={i => (this.poundsInput = i)}
                        
                    />
                    <BigButton text={'Reset'} onPress={this.resetText} />
                    <BigButton
                        text={'Submit'}
                        onPress={this.calculateWeight}
                    />
                </View>

                {/* ================================ */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 70,
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    body: {
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        paddingTop: 50,
    },
    instructionsText: {
        width: '70%',
        marginBottom: 10,
    },
});
