import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class GiftsService {
    gifts: any[] = [
        {id: 1, name: "Vacuum", taken: false},
        {id: 2, name: "Microwave", taken: false},
        {id: 3, name: "1 Billion Dollars", taken: false},
        {id: 4, name: "Car", taken: false},
        {id: 5, name: "Mansion", taken: false},
        {id: 6, name: "Tropical Island", taken: false},
        {id: 7, name: "World Tour with Private Jet", taken: false},
        {id: 8, name: "Love", taken: false},
        {id: 9, name: "Friendship", taken: false},
        {id: 10, name: "Yourself", taken: false},
        {id: 11, name: "Kindness", taken: false},
        {id: 12, name: "Cooperation", taken: false},
        {id: 13, name: "Celebration", taken: false},
        {id: 14, name: "Best Wishes", taken: false},
    ]

    getCommits(): string {
        const commits = this.gifts.reduce((giftList, gift) => {
            return gift.taken ? 
                giftList + (
                    giftList === "" ? 
                        gift.name : 
                        `, ${gift.name}`
                ) : 
                giftList;
        }, "")
        return commits;
    }
}