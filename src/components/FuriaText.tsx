import { Text, TextProps, StyleProp, TextStyle } from "react-native";

interface FuriaTextProps extends TextProps {
    bold?: boolean;
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
  }

  export const FuriaText: React.FC<FuriaTextProps> = ({ 
    children, 
    style, 
    bold = false, 
    ...props 
  }) => {
    return (
      <Text
        style={[
          { 
            fontFamily: bold ? 'cs_regular' : 'cs_regular',
            
            color: '#FFFFFF' // Exemplo: cor padrão
          },
          style
        ]}
        {...props}
      >
        {children}
      </Text>
    );
  };