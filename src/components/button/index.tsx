import { StyledButton, StyledButtonText } from "./styles"
import { ButtonProps } from "@/src/entities/componentEntities/buttonProps"



/**
 * Componente de botão reutilizável.
 *
 * @param title - Texto exibido dentro do botão.
 * @param onPress - Função chamada quando o botão é pressionado.
 * @param style - Estilo adicional para o botão (opcional).
 * @param type - Tipo do botão, pode ser "primary", "secondary" ou "quiet" (opcional).
 *
 * Utiliza `TouchableOpacity` para criar um botão com efeito de opacidade ao pressionar.
 * O estilo do botão pode ser customizado via a prop `style`.
 * O texto do botão pode ser customizado via a prop `textStyle`.
 */
export function Button({ title, onPress, style, type }: ButtonProps) {
    if (!type){
        type = "primary";
    }
    return (
        <StyledButton onPress={onPress} style={style} title={title} type={type}>
            <StyledButtonText>
                {title}
            </StyledButtonText>
        </StyledButton>
    )
}