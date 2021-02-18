# Minecraft-SLP

### Description
This package sends SLP (see [here](https://wiki.vg/Server_List_Ping)) request to a minecraft server and return the result.

### How to use
This package wrap the ping into a Promise, you can use it like :
```typescript
import mcSLP from 'minecraft-slp';
mcSLP().then(() => {
  // Success
}, () => {
  // Error
});
```
Or you can use it with async/await
```typescript
import mcSLP from 'minecraft-slp';

async function myFunction() {
  await mcSLP();
}
```

The result format in case of success is :
```json
{
    "version": {
        "name": "1.8.7",
        "protocol": 47
    },
    "players": {
        "max": 100,
        "online": 5,
        "sample": [
            {
                "name": "thinkofdeath",
                "id": "4566e69f-c907-48ee-8d71-d7ba5aa00d20"
            }
        ]
    },
    "description": {
        "text": "Hello world"
    },
    "favicon": "data:image/png;base64,<data>"
}
```
## Created by [SOUQUET Thibault](https://thibaultsouquet.fr)
