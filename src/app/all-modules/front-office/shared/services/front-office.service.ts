import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_CONSTANT } from 'src/app/shared/constants/app-constant';
import { apiResultFormat } from 'src/app/shared/models/models';
import { Visitor } from '../models/visitor';

@Injectable({
    providedIn: 'root',
})
export class FrontOfficeDataService {
    constructor(private http: HttpClient) { }

    public getVisitors(): Promise<Array<Visitor>> {
        return new Promise((resolve, reject) => {
            var localStoredVisitors = localStorage.getItem(APP_CONSTANT.localStorage.key.visitors);
            if (!localStoredVisitors) {
                this.http.get<apiResultFormat>('assets/json/visitors.json').subscribe((res: apiResultFormat) => {
                    localStorage.setItem(APP_CONSTANT.localStorage.key.visitors, JSON.stringify(res.data));
                    resolve(res.data);
                });
            } else {
                resolve(JSON.parse(localStoredVisitors!));
            }
        })
    }

    public getVisitorById(visitorId: number) {
        this.getVisitors().then((res) => {
            return res.find(x => x.id == visitorId);
        });
    }

    public addVisitor(visitor: Visitor) {
        const visitors: Array<Visitor> = JSON.parse(localStorage.getItem(APP_CONSTANT.localStorage.key.visitors)!);
        var maxId = Math.max(...visitors.map(o => o.id));
        visitor.id = maxId + 1;
        visitors.push(visitor);
        localStorage.setItem(APP_CONSTANT.localStorage.key.visitors, JSON.stringify(visitors));
    }

    public updateVisitor(visitor: Visitor) {
        const visitors: Array<Visitor> = JSON.parse(localStorage.getItem(APP_CONSTANT.localStorage.key.visitors)!);

        let itemIndexToBeUpdated = visitors.findIndex(x => x.id === visitor.id);

        visitors[itemIndexToBeUpdated] = visitor;

        // set on local storage
        localStorage.setItem(APP_CONSTANT.localStorage.key.visitors, JSON.stringify(visitors));
    }

    public deleteVisitor(visitorId: number) {
        const visitors: Array<Visitor> = JSON.parse(localStorage.getItem(APP_CONSTANT.localStorage.key.visitors)!);

        // remove item
        const itemIndexToBeDeleted = visitors.findIndex(x => x.id === visitorId);
        visitors.splice(itemIndexToBeDeleted, 1);

        // set on local storage
        localStorage.setItem(APP_CONSTANT.localStorage.key.visitors, JSON.stringify(visitors));
    }

    public visitToOptions: Array<string> = ['Staff', 'OPD Patient', 'IPD Patient'];

    public staffList: Array<string> = [
        'Super Admin  (9001)', 'Sonia Bush (9002)', 'Sansa Gomez (9008)', 'John  Hook (9006)', 'Brad  Frost (9003)', 'Natasha  Romanoff (9010)',
        'Reyan Jain (9011)', 'April Clinton (9020)', 'Maria Ford (9018)'
    ];

    public ipdPatientList: Array<string> = [
        'Olivier Thomas (1) (IPDN14)', 'John Marshall (2) (IPDN31)', 'Dhawan Kulkarni (484) (IPDN47)', 'Jamesh Wood (532) (IPDN53)',
        'Preeti Desmukh (628) (IPDN60)', 'Varun mahajan (629) (IPDN61)', 'Cameron Martin (641) (IPDN62)', 'Emma Watson (642) (IPDN63)', 'Gaurav Shrivastava (643) (IPDN64)',
        'Jeffrey M. Ransom (781) (IPDN77)', 'Martin Opega (830) (IPDN81)', 'Arthur Wood (872) (IPDN83)', 'Kelvin Octamin (886) (IPDN86)', 'Alisha Knowles (896) (IPDN87)',
        'Maria Taylor (121) (IPDN88)', 'Christy D. Murray (937) (IPDN90)', 'Ryan D. Spangler (939) (IPDN91)', 'Ankit Singh (493) (IPDN92)', 'George R. Garcia (990) (IPDN93)',
        'MAIREENA GOMAZ (1005) (IPDN94)', 'George Parker (878) (IPDN95)', 'Cristian Messina (843) (IPDN96)', 'Nishant Kadakia (980) (IPDN97)', 'Maya Agarwal (1084) (IPDN98)',
        'Georgia Paten (1103) (IPDN99)'
    ];

    public opdPatientList: Array<string> = [
        'Olivier Thomas (1) (OPDN4764)', 'John Marshall (2) (OPDN4336)', 'Maria Taylor (121) (OPDN5061)', 'Wordey Limpi (151) (OPDN5189)', 'Arnav Joshi (190) (OPDN4218)',
        'Evander Jonh (288) (OPDN5513)', 'Mahima Shinde (363) (OPDN5355)', 'Dhawan Kulkarni (484) (OPDN5083)', 'Gaurav Patel (489) (OPDN5172)', 'Ankit Singh (493) (OPDN5427)',
        'Daniel Wood (509) (OPDN5875)', 'Shakib Khanna (520) (OPDN5787)', 'Stephen Jackson (874) (OPDN4742)', 'George Parker (878) (OPDN4778)',
        'Jamesh Wood (532) (OPDN5419)', 'David Hussan (539) (OPDN4805)', 'Nivetha Thomas (563) (OPDN5633)', 'Ashutosh pandey (578) (OPDN4919)', 'Emma Watson (642) (OPDN2981)',
        'Stuart Wood (580) (OPDN5177)', 'Preeti Desmukh (628) (OPDN2845)', 'varun mahajan (629) (OPDN2852)', 'Kalvin Martin (639) (OPDN6354)', 'Cameron Martin (641) (OPDN2977)',
        'Gaurav Shrivastava (643) (OPDN2985)', 'Harry Martin (655) (OPDN4762)',
        'NAMIT AGGRAWAL (658) (OPDN3061)', 'Obaid Venkatesh (765) (OPDN3989)', 'Jeffrey M. Ransom (781) (OPDN5387)', 'Carolyn Wright (827) (OPDN4557)', 'Martin Opega (830) (OPDN4455)',
        'Kathleen Campbell (840) (OPDN4516)', 'Cristian Messina (843) (OPDN4526)', 'Robin Dahlberg (844) (OPDN5786)', 'Arthur Wood (872) (OPDN4719)', 'Angela Clark (873) (OPDN5791)',
    ];
}