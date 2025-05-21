import { Cover } from "../Cover";
import { Heading } from "../Heading";
import { MusicRoomBlock } from "../MusicRoomBlock/MusicRoomBlock";
import { Paragraph } from "../Paragraph";
import { CallToActionButton } from "../CallToActionButton";


export const BlockRenderer = ({blocks}) => {
    console.log("Laddade block: ", blocks);
    //vi måsta mappa blocken eftersom de alltig kommer att vara en array (vilket vi kan se i google dev tools)
    return(
        blocks.map(block => {
            switch(block.name){
                case "acf/musicroom" : {
                    return <MusicRoomBlock key={block.id}
                                bookingStatus={block.attributes.data.booking_status} 
                                roomCategory={block.attributes.data.room_category}
                            />
                }
                case "core/paragraph" : {
                    return <Paragraph key={block.id} content={block.attributes.content} textAlign={block.attributes.textAlign}/>
                }
                case "core/heading" : {
                    return <Heading key={block.id} content={block.attributes.content} level={block.attributes.level} textAlign={block.attributes.textAlign}/>;
                }
                case "core/cover" : {
                    return <Cover key={block.id} background={block.attributes.url}>
                            <BlockRenderer blocks={block.innerBlocks}/>
                        </Cover>
                } 
                case "acf/ctabutton" : {
                    return <CallToActionButton 
                            key={block.id} 
                            buttonLabel={block.attributes.data.cta_label} 
                            destination={block.attributes.data.destination || "/"}
                            align={block.attributes.data.text_alignment}
                            />      
                }
            default: {
                return null;
            };
            } //end of switch statement
        })
    )

}