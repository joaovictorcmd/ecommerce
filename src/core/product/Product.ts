import Specifications from "@/core/product/Specifications";
import Priceable from "@/core/product/Priceable";

export default interface Product extends Priceable {
    id: number
    name: string
    description: string
    brand: string
    model: string
    image: string
    rate: number
    videoReview: string
    tags: string[]
    specifications: Specifications
}