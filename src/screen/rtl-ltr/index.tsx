import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, I18nManager } from 'react-native';

const LtrRtl = () => {
  const [isRTL, setIsRTL] = React.useState(false);

  const handleToggleLanguage = () => {
    // Toggle between RTL and LTR
    setIsRTL(!isRTL);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleToggleLanguage}>
        <Text style={styles.buttonText}>Toggle Language Direction</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={[styles.text, { textAlign: isRTL ? 'right' : 'left' }]}>
          {isRTL ? 'تحتفظ اللغة العربية بجاذبيتها وجمالها بفضل تاريخها العريق وتنوع استخدامها في الأدب والشعر والدين. تعتبر العربية لغة من اللغات السامية، تمتلك قواعد دقيقة ونظاماً لغوياً متكاملاً يعبر عن ثقافة غنية وتراث عريق. تُعَدُّ اللغة العربية من أكثر اللغات تأثيراً في العالم الإسلامي وعلى مدار التاريخ، حيث شهدت تطوراً وتفرداً في التعبير والتصوير اللغوي. إن استخدامها في اليوميات وفي الإعلام والتواصل الاجتماعي يعكس تماسكها واستمرارية تأثيرها على مختلف المجالات الحياتية.' : 'Text in English sdfbdsjfbdsfjsd ncsd fjdsfbdsfjbdsfdsfbdshfsdbfdshfdsf'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  textContainer: {
    width: '80%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color:'red',
    fontWeight: 'bold',
  },
});

export default LtrRtl;
