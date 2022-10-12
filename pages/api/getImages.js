import { Dalle } from "dalle-node";
import got from 'got';

/* export default async function handler(req, res) {
  const dalle = new Dalle2(req.query.k);
  const task = await dalle.getTask(req.query.q);
  res.status(200).json({ result: task });
} */

/* export default async function handler(req, res) {
    const dalle = new Dalle2(req.query.k);
    const task = await dalle.getDownload(req.query.q);
    res.status(200).json({ result: task });
  } */

/*   export default async function handler(req, res) {
    const dalle = new Dalle2(req.query.k);
    const task = await dalle.tryDownload(req.query.q);
    res.status(200).json({ result: task });
  } */

export class Dalle2 {
    constructor(bearerToken) {
      this.bearerToken = bearerToken;
      this.url = "https://labs.openai.com/api/labs";
    }
  
    async generate(prompt) {
      let task = await got.post(`${this.url}/tasks`, {
        json: {
          task_type: "text2im",
          prompt: {
            caption: prompt,
            batch_size: 4,
          },
        },
        headers: {
          Authorization: `Bearer ${ this.bearerToken }`
        }
      }).json();
  
      const refreshIntervalId = setInterval(async () => {
        task = await this.getTask(task.id)
  
        switch (task.status) {
          case "succeeded":
            clearInterval(refreshIntervalId);
            return task.generations;
          case "rejected":
            clearInterval(refreshIntervalId);
            return new DalleError(task.status_information);
          case "pending":
        }
      }, 2000);
    }
  
    async getTask(taskId) {
      return await got.get(`${this.url}/tasks/${ taskId }`, {
        headers: {
          Authorization: "Bearer " + this.bearerToken,
        },
      }).json();
    }
    
    async list(options = { limit: 50, fromTs: 0 }) {
      return await got.get(`${this.url}/tasks?limit=${ options.limit }${ options.fromTs ? `&from_ts=${ options.fromTs }` : '' }`, {
          headers: {
            Authorization: "Bearer " + this.bearerToken,
          },
        }).json();
    }
    
    async getCredits() {
      return await got.get(`${ this.url }/billing/credit_summary`, {
          headers: {
            Authorization: "Bearer " + this.bearerToken,
          },
        }).json();
    }

      async getDownload(generation_id) {
        return await got.get(`${ this.url }/generations/${generation_id}/download`, {
          headers: {
            Authorization: "Bearer " + this.bearerToken,
          },
        }).json();
      }
  }