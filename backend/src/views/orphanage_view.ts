import Orphanages from "../models/Orphanages";
import ImagesView from './images_view'

export default {
    render(orphanage: Orphanages){
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            open_on_weekends: orphanage.open_on_weekends,
            open_hours: orphanage.open_hours,
            images: ImagesView.renderMany(orphanage.images) 
        }
    },

    renderMany(orphanage: Orphanages[]){
        return orphanage.map(orphanage=>this.render(orphanage))
    }
};