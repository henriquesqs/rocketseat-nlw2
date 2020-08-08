import React, {useState, useEffect} from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import {useNavigation} from "@react-navigation/native";
import {RectButton} from "react-native-gesture-handler";
import api from "../../services/api";

function Landing() {
    // Using state looking for consumming our api to get the total num of connections
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get("/connections").then((response) => {
            const {total} = response.data;
            setTotalConnections(total);
        });
    }, []);

    const {navigate} = useNavigation();

    // Method to redirect user to Give-Classes page
    function handleNavigationToGiveClassesPage() {
        navigate("GiveClasses");
    }

    function handleNavigationToStudyPages() {
        navigate("Study");
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Bem-vvindo, {"\n"}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigationToStudyPages}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton
                    // When user presses this button, redirects to Give-Classes page
                    onPress={handleNavigationToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas{" "}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default Landing;
