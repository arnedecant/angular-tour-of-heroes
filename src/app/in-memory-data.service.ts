import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { 
        id: 0,  
        name: 'Zero',
        power: 'Absolutely nothing',
        flying: true,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere turpis in erat consectetur cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ac massa pharetra ligula euismod commodo. Suspendisse eget cursus nulla. In est nulla, dapibus eu odio fringilla, ultrices luctus elit. Vestibulum mattis sit amet leo non finibus. Mauris viverra metus ipsum, dictum efficitur ipsum viverra et.'
      },
      { 
        id: 1, 
        name: 'Mr. Nice',
        power: 'Is way too nice',
        flying: false,
        bio: 'Donec id volutpat elit. Curabitur cursus dui et nunc rutrum, non porta risus elementum. Donec ultrices massa eget justo eleifend, sed mattis arcu auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse efficitur eu lorem nec ultrices. Phasellus semper lobortis turpis, suscipit vulputate massa pretium eu. Mauris elementum justo ut orci elementum semper. Curabitur eu mi rutrum, suscipit sapien tempor, laoreet ipsum. Morbi in justo in ligula vulputate pulvinar.'
      },
      { 
        id: 2, 
        name: 'Narco',
        power: 'Loves himself',
        flying: false,
        bio: 'Donec ligula est, ultricies laoreet massa quis, efficitur iaculis felis. Proin a urna rhoncus eros ullamcorper volutpat. Vestibulum id ex finibus, consequat eros eu, pulvinar nulla. Integer venenatis porta ante vulputate tincidunt. Integer vitae velit lorem. Duis accumsan bibendum sagittis. Aenean efficitur egestas sapien eget pharetra.'
      },
      { 
        id: 3, 
        name: 'Bombasto',
        power: 'Throws bombs, but forgets to lit the fuse',
        flying: true,
        bio: 'Curabitur pharetra sollicitudin nisl eget porta. Aenean ut venenatis lacus, sit amet laoreet dui. Nullam sagittis ligula enim, feugiat aliquet eros tempus non. Sed hendrerit metus vel dictum cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam ut mollis orci. Suspendisse interdum iaculis nibh, id tincidunt tellus sagittis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisi nisl, imperdiet id quam sed, auctor blandit neque. Vivamus eros enim, dapibus et sem placerat, finibus dignissim diam. Donec sodales consectetur sapien non porta. Curabitur egestas nunc arcu, sed accumsan nibh feugiat vitae. Curabitur egestas, lorem et hendrerit imperdiet, metus felis tempor diam, in euismod mauris lacus non neque. Donec placerat libero nec est elementum, at semper nisl sagittis. Praesent dapibus faucibus arcu, in aliquam purus iaculis ac. Sed consectetur libero eu dui fringilla, id egestas dui scelerisque.'
      },
      { 
        id: 4, 
        name: 'Celeritas',
        power: 'Summons celery',
        flying: true,
        bio: 'Donec a feugiat metus. Cras magna sapien, ultricies ultrices dolor interdum, cursus pulvinar risus. Aenean sed sem faucibus diam porttitor rutrum. Maecenas aliquet vitae dolor at bibendum. Ut hendrerit leo tristique mauris fringilla fermentum. Donec luctus in diam vitae cursus. Curabitur egestas tellus condimentum nulla pellentesque, ac rutrum mauris aliquam. Mauris vestibulum porta varius. Aenean scelerisque sollicitudin libero sed congue.'
      },
      { 
        id: 5, 
        name: 'Magneta',
        power: 'Attracts metal',
        flying: false,
        bio: 'Fusce consequat metus et tortor volutpat, nec suscipit dolor pellentesque. Nullam ornare enim lorem, vel blandit augue sollicitudin vitae. Nullam sit amet enim mauris. Integer urna diam, interdum eu velit ac, pulvinar cursus urna. Vestibulum convallis orci vel fermentum convallis. Suspendisse at pharetra massa, vel blandit elit. Mauris vulputate pellentesque massa, et scelerisque leo elementum eget.'
      },
      { 
        id: 6, 
        name: 'RubberMan',
        power: 'Shoots rubberbands',
        flying: false,
        bio: 'Pellentesque vitae feugiat lacus, non pretium tortor. Mauris et felis non ante congue luctus. Maecenas est augue, malesuada ac fringilla et, rutrum ut enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dapibus purus eget feugiat dignissim. Phasellus mollis, justo at accumsan mattis, orci sem posuere nisi, in imperdiet nisi lorem in nisi. Aliquam erat volutpat. Mauris at massa ipsum. Nam ultricies congue velit nec rhoncus. Nullam vitae est quis libero fermentum bibendum quis quis ante.'
      },
      { 
        id: 7, 
        name: 'Dynama',
        power: 'Fixes any dynamo',
        flying: true,
        bio: 'Pellentesque fringilla odio dolor, ac facilisis diam placerat sit amet. Phasellus non nibh malesuada, rutrum ipsum sed, bibendum turpis. Phasellus sapien mauris, gravida ut augue eu, vehicula pellentesque mi. Praesent ultrices rhoncus risus ac gravida. Nullam luctus sapien in felis dignissim, eget semper lorem consequat. Donec rutrum nunc sem, sed congue eros vehicula a. Vivamus consequat mauris sem, vel commodo metus tincidunt eu. Maecenas tincidunt condimentum est at laoreet. Sed in sapien in magna ultricies volutpat sed accumsan neque. Integer congue tristique commodo. Proin a interdum erat, ut commodo nibh. Pellentesque nisl lacus, posuere id erat at, lobortis ultricies arcu. Ut efficitur lacinia porttitor. Curabitur sit amet nisl sagittis, maximus odio eget, gravida ex.'
      },
      { 
        id: 8, 
        name: 'Dr IQ',
        power: 'Thinks he\'s smart',
        flying: false,
        bio: 'Suspendisse gravida tellus vitae tortor dapibus, sit amet pulvinar sem pharetra. Aenean efficitur vehicula vehicula. Fusce et nibh in justo gravida mollis. Phasellus bibendum massa quis feugiat varius. Fusce venenatis nibh eget quam porttitor, ut egestas risus ultrices. Donec bibendum nec ante ac vestibulum. Pellentesque euismod eleifend risus, sit amet accumsan ex lobortis vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin id lorem in mauris pretium lacinia ut eu elit. Sed ante sapien, egestas sed libero at, vestibulum eleifend enim.'
      },
      { 
        id: 9, 
        name: 'Magma',
        power: 'Swims in volcano\'s',
        flying: false,
        bio: 'Maecenas ultricies enim a mi dapibus cursus. Integer porttitor enim nec orci mattis, eget gravida odio iaculis. Morbi maximus libero sit amet nulla sodales, ac volutpat magna ultricies. In condimentum ex at porttitor consectetur. Pellentesque ultrices leo eget tortor hendrerit faucibus. Phasellus at erat et sem finibus mollis sit amet in erat. Nulla vel sem vestibulum, lacinia lectus vel, lobortis orci. Sed eu neque risus. Sed id dapibus dui. Etiam hendrerit vehicula feugiat. Ut sed convallis quam.'
      },
      { 
        id: 10, 
        name: 'Tornado',
        power: 'Makes the eye of tornado\'s blink',
        flying: true,
        bio: 'Nam eu risus ut dolor dapibus porta. Nunc vitae diam luctus, consectetur nulla cursus, ullamcorper velit. Curabitur rhoncus eros eget velit sagittis, ac molestie leo auctor. Vestibulum sed sagittis dolor. Vestibulum commodo tincidunt mi at accumsan. Nulla id tempus lectus. In sit amet nunc nec ipsum ullamcorper dignissim. Cras faucibus quam ante, quis rhoncus urna venenatis at.'
      }
    ];
    return {heroes};
  }
}